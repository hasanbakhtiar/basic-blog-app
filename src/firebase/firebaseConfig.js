import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAbc5AchnVBHSXHYKNsL_jhRcztxA680PU",
    authDomain: "react-blog-app-fd862.firebaseapp.com",
    projectId: "react-blog-app-fd862",
    storageBucket: "react-blog-app-fd862.appspot.com",
    messagingSenderId: "907850692676",
    appId: "1:907850692676:web:555db95ffb3f6833f7a411"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  database.ref().set({
        title: "blog title1",
        name: "Reshad",
        surname: "Rzayev",
        car:{
            model:"toyota"
        },
        moto:["Yamaha",1]
  });