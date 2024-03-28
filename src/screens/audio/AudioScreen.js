import React, { useState, useEffect } from 'react';
import { SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions, } from 'react-native';
import { ListItem, Slider } from 'react-native-elements';
import SoundPlayer from 'react-native-sound-player';
import zpApi from '../../api/Api';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TrackPlayer,{useTrackPlayerEvents,
    usePlaybackState,
    useProgress,
    Event,
    State} from 'react-native-track-player';

import { ProgressBar } from 'react-native-paper';
import { addTracks, setupPlayer } from './trackPlayerServices';
function Playlist() {
    const [queue, setQueue] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(0);
  
    async function loadPlaylist() {
      const queue = await TrackPlayer.getQueue();
      setQueue(queue);
    }
  
    useEffect(() => {
      loadPlaylist();
    }, []);
  
    useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
      if(event.state == State.nextTrack) {
        TrackPlayer.getCurrentTrack().then((index) => setCurrentTrack(index));
      }
    });
  
    function PlaylistItem({index, title, isCurrent}) {
  
      function handleItemPress() {
        TrackPlayer.skip(index);
      }
  
      return (
        <TouchableOpacity onPress={handleItemPress}>
          <Text
            style={{...styles.playlistItem,
              ...{backgroundColor: isCurrent ? '#674fa3' : 'transparent'},...{color: isCurrent ? 'white' : 'black'}}}>
          {title}
          </Text>
        </TouchableOpacity>
      );
    }
  
    return(
      <View>
        <View style={styles.playlist}>
          <FlatList
            contentContainerStyle={{gap:5}}
            
            data={queue}
            renderItem={({item, index}) => <PlaylistItem
                                              index={index}
                                              title={item.title}
                                              isCurrent={currentTrack == index }/>
            }
          />
        </View>
        <Controls/>
      </View>
    );
  }
  
  function Controls({ onShuffle }) {
    const playerState = usePlaybackState();
    const [isPlaying, setIsPlaying] = useState(false);
    async function handlePlayPress() {
      if(await TrackPlayer.getState() == State.Playing) {
        TrackPlayer.pause();
         setIsPlaying(false);
      }
      else {
        TrackPlayer.play();
        setIsPlaying(true);
      }
    }
  
    return(
      <View style={{flexDirection: 'row',
        flexWrap: 'wrap', alignItems: 'center'}}>
          <Icon.Button
            name="arrow-left"
            color='#674fa3'
            size={28}
            backgroundColor="transparent"
            onPress={() => TrackPlayer.skipToPrevious()}/>
          <Icon.Button
            name={isPlaying ? 'pause' : 'play'}
            color='#674fa3'
            size={28}
            backgroundColor="transparent"
            onPress={handlePlayPress}/>
          <Icon.Button
            name="arrow-right"
            color='#674fa3'
            size={28}
            backgroundColor="transparent"
            onPress={() => TrackPlayer.skipToNext()}/>
      </View>
    );
  }
  function TrackProgress() {
    const { position, duration } = useProgress(200);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(async () => {
            const current = await TrackPlayer.getPosition();
            const total = await TrackPlayer.getDuration();
            
            setProgress(current / total);
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);
    function format(seconds) {
      let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
      let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    }
    async function handleSliderChange(value) {
        const total = await TrackPlayer.getDuration();
        const newPosition = value * total;
        await TrackPlayer.seekTo(newPosition);
        setProgress(value);
      }
    return(
      <View style={{backgroundColor:'#674fa3',borderBottomLeftRadius:10,borderBottomRightRadius:10,paddingBottom:10}}>            
       
       <Slider
        style={{ width:300, alignSelf: 'center'}}
        minimumTrackTintColor="white"
        thumbTintColor='white'
        thumbStyle={{width:20,height:20}}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        onSlidingComplete={handleSliderChange}
      />
      
        
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
      <Text style={styles.trackProgress}>
          { format(position) } 
        </Text>
        <Text style={styles.trackProgress}>
         { format(duration) }
        </Text>
      </View>
        
      </View>
    );
  }
  function Header() {
    const [info, setInfo] = useState({});
    useEffect(() => {
      setTrackInfo();
    }, []);
  
    useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
      if(event.state == State.nextTrack) {
        setTrackInfo();
      }
    });
  
    async function setTrackInfo() {
      const track = await TrackPlayer.getCurrentTrack();
      const info = await TrackPlayer.getTrack(track);
      setInfo(info);
    }
  
    return(
      <View style={{backgroundColor:'#674fa3',borderTopLeftRadius:10,borderTopRightRadius:10,padding:10}}>
          <Text style={styles.songTitle}>{info.title}</Text>
          <Text style={styles.artistName}>{info.artist}</Text>
      </View>
    );
  }

const AudioScreen = () => {
    const [audios, setAudios] = useState([]);
    const playbackState = usePlaybackState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentAudioUrl, setCurrentAudioUrl] = useState(null);
    const [currentAudioTitle, setCurrentAudioTitle] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    // useEffect(() => {
    //     const fetchAudios = async () => {
    //         try {
    //             const audiosData = await zpApi.getAudios();
    //             setAudios(audiosData);
    //         } catch (error) {
    //             console.error('Error fetching audios:', error);
    //         }
    //     };

    //     fetchAudios();
    // }, []);
    useEffect(() => {
        async function setup() {
          let isSetup = await setupPlayer();
    
          const queue = await TrackPlayer.getQueue();
          if(isSetup && queue.length <= 0) {
            await addTracks();
          }
    
          setIsPlayerReady(isSetup);
        }
    
        setup();
      }, []);
    
      if(!isPlayerReady) {
        return (
          <SafeAreaView style={styles.container}>
            <ActivityIndicator size="large" color="#bbb"/>
          </SafeAreaView>
        );
      }
    
    
      return (
        <SafeAreaView style={styles.container}>
          <Header/>
          <TrackProgress/>
          <Playlist/>
        </SafeAreaView>
      );
      

   
    

    // return (
    //     <View style={styles.container}>
    //         {audios.map((audio, index) => (
    //             <ListItem key={index} bottomDivider>
    //                 <MaterialCommunityIcons name='music-note-outline' color='#674fa3' size={30} containerStyle={styles.iconContainer} />
    //                 <ListItem.Content>
    //                     <ListItem.Title style={{ fontWeight: 'bold' }}>{audio.title}</ListItem.Title>
                        
    //                 </ListItem.Content>
    //                 <TouchableOpacity onPress={() => TrackPlayer.play()}>
    //                     <Feather name='play' color='#674fa3' size={30} />
    //                 </TouchableOpacity>
    //                 <TouchableOpacity onPress={() => {}}>
    //                     <Feather name='download' color='#674fa3' size={30} />
    //                 </TouchableOpacity>
    //             </ListItem>
    //         ))}
    //         {playbackState === TrackPlayer.STATE_PLAYING  && (
    //             <View style={{backgroundColor:'#f2f2f2',flex:1}}>
    //             <View style={styles.playerContainer}>
    //                 <View style={styles.controlsContainer}>
    //                     <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>{currentAudioTitle}</Text>
    //                     <View style={{flexDirection:'row'}}>  
    //                     <TouchableOpacity onPress={() => playAudio(currentAudioUrl)}>
    //                         <SimpleLineIcons name={isPlaying ? 'control-pause' : 'control-play'} size={30} color='#674fa3' />
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => {}}>
    //                         <MaterialCommunityIcons name={'close'} size={30} color='#674fa3' />
    //                     </TouchableOpacity> 
    //                     </View>
                        
    //                 </View>
    //                 <View style={styles.progressBarContainer}>
    //                     <ProgressBar progress={progress} width={200} />
    //                     <View style={styles.timeContainer}>
    //                         <Text style={{ color: '#f2f2f2' }}>{formatTime(currentTime)}</Text>
    //                         <Text style={{ color: '#f2f2f2' }}>{formatTime(totalTime)}</Text>
    //                     </View>
    //                 </View>
    //             </View>
    //             </View>
    //         )}
    //     </View>
    // );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor:'white'
        
    },
    trackProgress: {
        
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
      },
      songTitle: {
        fontSize: 32,
        marginTop: 50,
        color: 'white'
      },
      artistName: {
        fontSize: 24,
        color: '#888'
      },
    iconContainer: {
        backgroundColor: '#cccccc',
        padding: 10,
        borderRadius: 20,
    },
    playerContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        backgroundColor: '#fff', 
        borderRadius:10
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 10,
    },
    progressBarContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    playlist: {
        marginTop: 40,
        marginBottom: 40
      },
      playlistItem: {
        fontSize: 16,
        color:'black',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4
      },
});


export default AudioScreen;
