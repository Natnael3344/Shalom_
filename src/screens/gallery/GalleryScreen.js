import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Modal, TextInput, StyleSheet, Image, FlatList, ActivityIndicator, Text, Dimensions, PermissionsAndroid, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import zpApi from '../../api/Api';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob'
import LinearGradient from 'react-native-linear-gradient';
const GalleryScreen = () => {
 
  const [gallery, setGallery] = useState(null);
  const [filteredGallery, setFilteredGallery] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [granted, setGranted] = useState(null);
  useEffect(() => {
    const fetchGallery = async () => {
      const REQUEST_STORAGE_PERMISSION_CODE = 1;
        try {
            const galleryData = await zpApi.getGallery(); 
            setGallery(galleryData);
            setFilteredGallery(galleryData);
            console.log("Gallery", galleryData);
        } catch (error) {
            console.error('Error fetching gallery:', error);
        }
    };
    const requestStoragePermission = async () => {
      try {
          const grant = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'This app needs access to your storage to download images.',
              buttonPositive: 'OK',
            }
          );
        setGranted(grant);
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.warn('Storage permission denied');
        }
      } catch (error) {
        console.error('Error requesting storage permission:', error);
      }
    };
    requestStoragePermission();
    fetchGallery();
  }, []);

  const filterGallery = (filter) => {
    if (filter === 'All') {
      setFilteredGallery(gallery);
    } else {
        const filtered = gallery.filter(item => {
            // Define mapping between button titles and corresponding keywords
            const filterMappings = {
              'Retreat':'Retreat',
              'Wedding':'Wedding',
              'Graduation':'Graduation',
              'Church Service': 'Service',
              'Special Occasions': 'Special',
              'More':'Additional'
              // Add more mappings as needed
            };
            const keyword = filterMappings[filter];
            return item.title.toLowerCase().includes(keyword.toLowerCase());
          });
      setFilteredGallery(filtered);
    }
    setSelectedFilter(filter);
  };
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const renderFilterButton = (filter) => {
    return (
      <TouchableOpacity key={filter} onPress={() => filterGallery(filter)} style={{ alignItems:'center',marginHorizontal: 5,marginTop:10,borderRadius:30}}>
       <LinearGradient
        colors={selectedFilter === filter ?['#674fa3', '#00d4ff']:['#e7dfec','#e7dfec'  ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.gradient, {opacity: (selectedFilter === filter)? 1 : 1}]}>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight:'bold',color:selectedFilter === filter ? 'white' : 'black'}}>{filter}</Text>    
        </View>
      </LinearGradient>
       </TouchableOpacity>
        
    );
  };

  const renderItem = ({ item,index }) => (
    <TouchableOpacity style={styles.item} key={item.title} onPress={() => openModal(index)}>
      <Image
        source={{ uri: item.url }}
        style={styles.media}
      />
    </TouchableOpacity>
  );
  // const downloadImage = async (imageUrl) => {
  //   console.log('url',imageUrl);
  //   try {
  //     console.log('Permission');
  //     // const granted = await PermissionsAndroid.request(
  //     //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //     //   {
  //     //     title: 'Storage Permission Required',
  //     //     message: 'This app needs access to your storage to download images.',
  //     //     buttonPositive: 'OK',
  //     //   },
  //     // );
  
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Granted');
  //       const { config, fs } = RNFetchBlob;
  //       const imagePath = `${fs.dirs.DownloadDir}/${imageUrl.split('/').pop()}`;
  //       const options = {
  //         fromUrl: imageUrl,
  //         toFile: imagePath,
  //       };
  
  //       const downloadResult = await config(options).fetch('GET');
  //       if (downloadResult.statusCode === 200) {
  //         console.log('Image downloaded successfully:', imagePath);
  //         /// Add download message
  //       } else {
  //         console.error('Failed to download image:', downloadResult);
  //         /// Show message check your internet connection
  //       }
  //     } else {
  //       console.warn('Storage permission denied');
  //       // Handle permission denial, show error message, etc.
  //       const { config, fs } = RNFetchBlob;
  //       const imagePath = `${fs.dirs.DownloadDir}/${imageUrl.split('/').pop()}`;
  //       const options = {
  //         fromUrl: imageUrl,
  //         toFile: imagePath,
  //       };
  
  //       const downloadResult = await config(options).fetch('GET');
  //       if (downloadResult.statusCode === 200) {
  //         console.log('Image downloaded successfully:', imagePath);
  //         /// Add download message
  //       } else {
  //         console.error('Failed to download image:', downloadResult);
  //         /// Show message check your internet connection
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error downloading image:', error);
  //     // Handle error, show error message, etc.
  //   }
  // };

  
  const downloadImage = (imageUrl) => {
    // Main function to download the image
    
    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = imageUrl;    
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' + 
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
             /[^.]+$/.exec(filename) : undefined;
  };


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {['All', 'Retreat', 'Wedding', 'Graduation', 'Church Service', 'Special Occasions', 'More'].map(filter => (
          renderFilterButton(filter)
        ))}
      </View>
      {filteredGallery ? (
        <FlatList
          data={filteredGallery}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          numColumns={2}
          // contentContainerStyle={styles.listContainer}
          scrollEnabled={true}
        />
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
       <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Swiper
          index={selectedImageIndex}
          loop={false}
          showsPagination={false}
          style={styles.wrapper}
        >
          {filteredGallery && filteredGallery.map((item, index) => (
            <View key={index} style={styles.slide}>
              
            <Image
              source={{ uri: item.url }}
              style={styles.fullImage}/>
            
              <TouchableOpacity style={styles.backButton} onPress={closeModal}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.downloadButton} onPress={() => downloadImage(item.url)}>
                <FontAwesome6 name="download" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </Swiper>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor:'white'
  },
  gradient: {
    paddingHorizontal:20, paddingVertical:10,
    borderRadius:30,
    justifyContent: 'center',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    flex: 1,
    margin: 7,
    borderRadius: 15,
    overflow: 'hidden',
    height:120
  },
  media: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  downloadButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default GalleryScreen;
