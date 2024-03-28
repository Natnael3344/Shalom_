import { AppState, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { getFcmToken, getStoredNotifications, registerListenerWithFCM } from '../../setup/helpers/fcmHelper';
import { FlatList } from 'react-native-gesture-handler';
import { getData } from '../../api/asyncStorage';
import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
  
    // Function to fetch notifications from AsyncStorage
    const fetchNotifications = async () => {
      const storedNotifications = await AsyncStorage.getItem('notifications');
      if (storedNotifications) {
        const parsedNotifications = JSON.parse(storedNotifications);
        setNotifications(parsedNotifications);
      }
    };
  
    useEffect(() => {
        // AsyncStorage.removeItem("notifications");
      // Fetch notifications when the component mounts
      fetchNotifications();
  
      // Register FCM listener
      const unsubscribeFCM = registerListenerWithFCM();
  
      // Listen for changes in app state (foreground/background)
      const handleAppStateChange = async (nextAppState) => {
        if (nextAppState === 'active') {
          // If the app becomes active (foreground), fetch notifications
          fetchNotifications();
        }
      };
  
      AppState.addEventListener('change', handleAppStateChange);
  
      // Cleanup function
      return () => {
        AppState.removeEventListener('change', handleAppStateChange);
        unsubscribeFCM();
      };
    }, []);
  
    console.log("Notification new", notifications);
  
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {notifications.map((item, index) => (
        <ListItem key={index} bottomDivider>
          <ListItem.Content>
          <ListItem.Title style={{ fontWeight: 'bold' }}>{item?.notification?.title}</ListItem.Title>
          <ListItem.Subtitle>{item?.notification?.body}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      </View>
    );
  };
const styles = StyleSheet.create({
notificationContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
},
body: {
    fontSize: 16,
    marginTop: 5,
    color:'black'
},
});


    export default Notification;