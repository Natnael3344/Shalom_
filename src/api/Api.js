import http from 'axios';
import {isEmptyObj} from 'native-base';
import {clearData, getData, storeData} from './asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, currentUser, getIdToken,initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { collection, getDocs,getFirestore  } from 'firebase/firestore';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBAt1yRGehOjBJeZQNjx3YoQVs4_0dTGoQ",
  authDomain: "shalom-65e9a.firebaseapp.com",
//   databaseURL: 'https://football-f559a.firebaseio.com',
  projectId: "shalom-65e9a",
  storageBucket: "shalom-65e9a.appspot.com",
  messagingSenderId: "175766333251",
  appId: "1:175766333251:android:e955de36c43c0af04df1f6"
};
// const app = initializeApp(firebaseConfig);
export const api='https://dhule.districtpolice.in/';
export const config = {
    endpoint : {
        forgotPassword : 'reset_password',
        loginUrl:'api/app/session/login',
        verifyUrl:'api/app/session/verify',
        menuUrl:'api/app/menu/menu'
    }
}

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const db = getFirestore(app);
const storage = getStorage(app);
export default class zpApi {
        static async baseHeaders() {
          try {
            let token = await AsyncStorage.getItem('token_value');
      
            if (!token) {
              const user = auth.currentUser;
              if (user) {
                token = await user.getIdToken();
              }
            }
      
            if (token) {
              return {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
              };
            } else {
              return {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
              };
            }
          } catch (error) {
            console.error('Error retrieving token:', error);
            throw error;
          }
        }

    static async authenticate(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                const token = await user.getIdToken();
                await storeData('token_value', token);
                return token;
            }
        } catch (error) {
            console.error('Authentication error:', error);
            throw error;
        }
    }
    static async syncEventsWithFirestore() {
        const eventsCollection = collection(db, 'events');

        onSnapshot(eventsCollection, (snapshot) => {
            const events = snapshot.docs.map(doc => doc.data());
            AsyncStorage.setItem('eventsData', JSON.stringify(events));
        });
    }
    static async syncPrayersWithFirestore() {
        const prayersCollection = collection(db, 'prayer');

        onSnapshot(prayersCollection, (snapshot) => {
            const prayers = snapshot.docs.map(doc => doc.data());
            AsyncStorage.setItem('prayersData', JSON.stringify(prayers));
        });
    }
    static async syncConductorsWithFirestore() {
        const conductorsCollection = collection(db, 'conductor');

        onSnapshot(conductorsCollection, (snapshot) => {
            const conductors = snapshot.docs.map(doc => doc.data());
            AsyncStorage.setItem('conductorData', JSON.stringify(conductors));
        });
    }
    static async getEvents() {
        try {
            let eventsData = await AsyncStorage.getItem('eventsData');

            if (!eventsData) {
                // If eventsData is not cached in AsyncStorage, fetch it from Firestore
                const eventsCollection = collection(db, 'events');
                const snapshot = await getDocs(eventsCollection);
                const events = snapshot.docs.map(doc => doc.data());

                // Store events data in AsyncStorage for offline use
                await AsyncStorage.setItem('eventsData', JSON.stringify(events));

                // Set eventsData variable
                eventsData = events;

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncEventsWithFirestore();
            } else {
                // Parse cached eventsData from AsyncStorage
                eventsData = JSON.parse(eventsData);
            }

            return eventsData;
        } catch (error) {
            console.error('Error getting events:', error);
            throw error;
        }
    }
    static async getLyrics() {
        try {
            let lyricsData = await AsyncStorage.getItem('lyricsData');

            if (!lyricsData) {
                // If eventsData is not cached in AsyncStorage, fetch it from Firestore
                const lyricsCollection = collection(db, 'lyrics');
                const snapshot = await getDocs(lyricsCollection);
                const lyrics = snapshot.docs.map(doc => doc.data());

                // Store events data in AsyncStorage for offline use
                await AsyncStorage.setItem('lyricsData', JSON.stringify(lyrics));

                // Set eventsData variable
                lyricsData = lyrics;

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncEventsWithFirestore();
            } else {
                // Parse cached eventsData from AsyncStorage
                lyricsData = JSON.parse(lyricsData);
            }

            return lyricsData;
        } catch (error) {
            console.error('Error getting lyrics:', error);
            throw error;
        }
    }
    static async getAudios() {
        try {
            const audioRef = ref(storage, 'audios'); // Adjust 'audios' to the correct path in your Firebase Storage

            const audioList = await listAll(audioRef);
            const audioURLs = [];

            for (const item of audioList.items) {
                const url = await getDownloadURL(item);
                const title = this.getTitleFromUrl(url);
                const cleanedTitle = this.cleanTitle(title);
                audioURLs.push({ title: cleanedTitle, url });
            }

            return audioURLs;
        } catch (error) {
            console.error('Error getting audios:', error);
            throw error;
        }
    }
    static getTitleFromUrl(url) {
        try {
            // Split the URL by '/' and get the last part, which contains the filename
            const parts = url.split('/');
            const filename = parts[parts.length - 1];

            // Remove the file extension
            const title = filename.split('.').slice(0, -1).join('.');

            return title;
        } catch (error) {
            console.error('Error extracting title from URL:', error);
            return 'Unknown Title';
        }
    }
    static cleanTitle(title) {
        // Remove "dios%2F" from the beginning of the title
        return title.replace('audios%2F', '');
    }
    static async getPrayer() {
        try {
            let prayerData = await AsyncStorage.getItem('prayerData');

            if (!prayerData) {
                const prayersCollection = collection(db, 'prayer');
                const snapshot = await getDocs(prayersCollection);
                const prayers = snapshot.docs.map(doc => doc.data());

                // Store events data in AsyncStorage for offline use
                await AsyncStorage.setItem('prayerData', JSON.stringify(prayers));

                // Set eventsData variable
                prayerData = prayers;

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncPrayersWithFirestore();
            } else {
                // Parse cached eventsData from AsyncStorage
                prayerData = JSON.parse(prayerData);
            }

            return prayerData;
        } catch (error) {
            console.error('Error getting Prayer:', error);
            throw error;
        }
    }
    static async getConductor() {
        try {
            let conductorData = await AsyncStorage.getItem('conductorData');

            if (!conductorData) {
                const conductorCollection = collection(db, 'conductor');
                const snapshot = await getDocs(conductorCollection);
                const conductors = snapshot.docs.map(doc => doc.data());

                // Store events data in AsyncStorage for offline use
                await AsyncStorage.setItem('conductorData', JSON.stringify(conductors));

                // Set eventsData variable
                conductorData = conductors;

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncConductorsWithFirestore();
            } else {
                // Parse cached eventsData from AsyncStorage
                conductorData = JSON.parse(conductorData);
            }

            return conductorData;
        } catch (error) {
            console.error('Error getting conductor:', error);
            throw error;
        }
    }
    static cleanTitleMember(title) {
        const decodedTitle = decodeURIComponent(title);
        return decodedTitle.replace('members/', '');
    }
    static async syncMembersWithFirestore() {
        const membersCollection = collection(db, 'members');

        onSnapshot(membersCollection, (snapshot) => {
            const members = snapshot.docs.map(doc => doc.data());
            AsyncStorage.setItem('membersData', JSON.stringify(members));
        });
    }
    static async getMembers() {
        try {
            let membersData = await AsyncStorage.getItem('membersData');

            if (!membersData) {
                // If membersData is not cached in AsyncStorage, fetch it from Firestore
                const membersRef = ref(storage, 'members');
                const membersList = await listAll(membersRef);
                const membersURLs = [];

                for (const item of membersList.items) {
                    const url = await getDownloadURL(item);
                    const title = this.getTitleFromUrl(url);
                    const cleanedTitle = this.cleanTitleMember(title);
                    membersURLs.push({ title: cleanedTitle, url });
                }

                // Store members data in AsyncStorage for offline use
                await AsyncStorage.setItem('membersData', JSON.stringify(membersURLs));

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncMembersWithFirestore();

                // Set membersData variable
                membersData = membersURLs;
            } else {
                // Parse cached membersData from AsyncStorage
                membersData = JSON.parse(membersData);
            }

            return membersData;
        } catch (error) {
            console.error('Error getting members list:', error);
            throw error;
        }
    }
    static async getLyrics() {
        try {
            let lyricsData = await AsyncStorage.getItem('lyricsData');

            if (!lyricsData) {
                // If eventsData is not cached in AsyncStorage, fetch it from Firestore
                const lyricsCollection = collection(db, 'lyrics');
                const snapshot = await getDocs(lyricsCollection);
                const lyrics = snapshot.docs.map(doc => doc.data());

                // Store events data in AsyncStorage for offline use
                await AsyncStorage.setItem('lyricsData', JSON.stringify(lyrics));

                // Set eventsData variable
                lyricsData = lyrics;

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncEventsWithFirestore();
            } else {
                // Parse cached eventsData from AsyncStorage
                lyricsData = JSON.parse(lyricsData);
            }

            return lyricsData;
        } catch (error) {
            console.error('Error getting lyrics:', error);
            throw error;
        }
    }
    static async syncDetailWithFirestore() {
        const detailsCollection = collection(db, 'members');

        onSnapshot(detailsCollection, (snapshot) => {
            const details = snapshot.docs.map(doc => doc.data());
            AsyncStorage.setItem('detailsData', JSON.stringify(details));
        });
    }
    static async getMembersDetail() {
        try {
            let detailsData = await AsyncStorage.getItem('detailsData');

            if (!detailsData) {
                const detailsCollection = collection(db, 'members');
                const snapshot = await getDocs(detailsCollection);
                const details = snapshot.docs.map(doc => doc.data());

                await AsyncStorage.setItem('detailsData', JSON.stringify(details));

                detailsData = details;

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncDetailWithFirestore();
            } else {
                // Parse cached eventsData from AsyncStorage
                detailsData = JSON.parse(detailsData);
            }

            return detailsData;
        } catch (error) {
            console.error('Error getting detail:', error);
            throw error;
        }
    }
    static getGalleryTitleFromUrl(url) {
        try {
            const parts = url.split('/');
            const filename = parts[parts.length - 1];

            // Remove the file extension
            const title = filename.split('.').slice(0, -1).join('.');

            return title;
        } catch (error) {
            console.error('Error extracting title from URL:', error);
            return 'Unknown Title';
        }
    }
    static cleanTitleGallery(title) {
        const decodedTitle = decodeURIComponent(title);
        return decodedTitle.replace('gallery/', '');
    }
    static async syncGalleryWithFirestore() {
        const galleryCollection = collection(db, 'gallery');

        onSnapshot(galleryCollection, (snapshot) => {
            const gallery = snapshot.docs.map(doc => doc.data());
            AsyncStorage.setItem('galleryData', JSON.stringify(gallery));
        });
    }
    static async getGallery() {
        try {
            let galleryData = await AsyncStorage.getItem('galleryData');

            if (!galleryData) {
                const galleryRef = ref(storage, 'gallery');
                const galleryList = await listAll(galleryRef);
                const galleryURLs = [];

                for (const item of galleryList.items) {
                    const url = await getDownloadURL(item);
                    const title = this.getGalleryTitleFromUrl(url);
                    const cleanedTitle = this.cleanTitleGallery(title);
                    galleryURLs.push({ title: cleanedTitle, url });
                }

                // Store members data in AsyncStorage for offline use
                await AsyncStorage.setItem('galleryData', JSON.stringify(galleryURLs));

                // Start listening for changes in Firestore and update AsyncStorage
                this.syncGalleryWithFirestore();

                // Set membersData variable
                galleryData = galleryURLs;
            } else {
                // Parse cached membersData from AsyncStorage
                galleryData = JSON.parse(galleryData);
            }

            return galleryData;
        } catch (error) {
            console.error('Error getting members list:', error);
            throw error;
        }
    }
    static async logout() {
        try {
            await clearData('token_value');
            // Additional logout logic if necessary
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    }

    static baseUrl() {
        return '';
    }

    static async get(route, headers, params, timeout = 15000) {
        return this.apiCall('get', route, headers, params, {}, timeout);
    }

    static async post(route, headers, params, postData, timeout = 15000) {
        return this.apiCall('post', route, headers, params, postData, timeout);
    }

    static async put(route, headers, params, postData, timeout = 15000) {
        return this.apiCall('put', route, headers, params, postData, timeout);
    }

    static async delete(route, headers, params, timeout = 15000) {
        return this.apiCall('delete', route, headers, params, {}, timeout);
    }

    static async apiCall(
        requestType,
        route,
        headers,
        params,
        postData,
        timeout = 15000,
    ) {
        try {
            const host = zpApi.baseUrl();
            const url = `${host}${route}`;
            const baseHeaders = await zpApi.baseHeaders();
            const requestConfig = {
                headers: headers ? { ...baseHeaders, ...headers } : baseHeaders,
            };

            if (params) {
                requestConfig.params = params;
            }

            const response = await fetch(url, requestConfig);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API call error:', error);
            throw error;
        }
    }
}

