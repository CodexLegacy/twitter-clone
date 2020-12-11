import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_jTLnpc3Sm08F-qBB0f8z1ZfKuuamTtU",
    authDomain: "twitter-clone-7d541.firebaseapp.com",
    databaseURL: "https://twitter-clone-7d541.firebaseio.com",
    projectId: "twitter-clone-7d541",
    storageBucket: "twitter-clone-7d541.appspot.com",
    messagingSenderId: "1017564344575",
    appId: "1:1017564344575:web:a897fa4bd11c14a3655cca",
    measurementId: "G-3Y3HZ17YEW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;