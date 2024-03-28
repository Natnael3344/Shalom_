import TrackPlayer, {
    AppKilledPlaybackBehavior,
    Capability,
    RepeatMode,
    Event
  } from 'react-native-track-player';
import zpApi from '../../api/Api';
  
  export async function setupPlayer() {
    let isSetup = false;
    try {
      await TrackPlayer.getCurrentTrack();
      isSetup = true;
    }
    catch {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      });
  
      isSetup = true;
    }
    finally {
      return isSetup;
    }
  }
  export async function addTracks() {
    try {
        // Fetch audio URLs dynamically
        const audioURLs = await zpApi.getAudios();

        // Convert audioURLs into TrackPlayer compatible format
        const tracks = audioURLs.map((audio, index) => ({
            id: index.toString(),
            url: audio.url,
            title: audio.title,
            artist: 'Shalom Choir', // You can set artist dynamically if available
            duration: 0, // You may need to fetch duration from the audio source
        }));

        // Add tracks to the player
        await TrackPlayer.add(tracks);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    } catch (error) {
        console.error('Error adding tracks:', error);
        throw error;
    }
}
//   export async function addTracks() {
//     try {
        
//         // Fetch audios using the getAudios method from zpApi
//         const audioTracks = await zpApi.getAudios();
//         console.log(audioTracks);
//         // Map the fetched audio tracks to the format required by TrackPlayer
//         const tracks = audioTracks.map((track, index) => ({
//             id: `${index}`, // Use index as id or adjust accordingly
//             url: track.url, // URL of the audio track
//             title: track.title, // Title of the audio track
//             artist: '', // Artist of the audio track (you can adjust this)
//             artwork: '', // Artwork of the audio track (you can adjust this)
//         }));
       
//         // Add the tracks to TrackPlayer
//         await TrackPlayer.add(tracks);

//         // Set repeat mode
//         await TrackPlayer.setRepeatMode(RepeatMode.Queue);
//     } catch (error) {
//         console.error('Error adding tracks:', error);
//     }
// }

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        console.log('Event.RemotePause');
        TrackPlayer.pause();
      });
    
      TrackPlayer.addEventListener(Event.RemotePlay, () => {
        console.log('Event.RemotePlay');
        TrackPlayer.play();
      });
    
      TrackPlayer.addEventListener(Event.RemoteNext, () => {
        console.log('Event.RemoteNext');
        TrackPlayer.skipToNext();
      });
    
      TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        console.log('Event.RemotePrevious');
        TrackPlayer.skipToPrevious();
      });
  }