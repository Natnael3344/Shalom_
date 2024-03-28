import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAt1yRGehOjBJeZQNjx3YoQVs4_0dTGoQ",
    authDomain: "shalom-65e9a.firebaseapp.com",
    projectId: "shalom-65e9a",
    storageBucket: "shalom-65e9a.appspot.com",
    messagingSenderId: "175766333251",
    appId: "1:175766333251:android:e955de36c43c0af04df1f6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };