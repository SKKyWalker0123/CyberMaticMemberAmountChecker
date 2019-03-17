import firebase from 'firebase/app'
import 'firebase/database'
  var config = {
    apiKey: "AIzaSyAg1LC_1UAeHfpO1zjPEpUjZlkI-hPj4FA",
    authDomain: "cybermatic.firebaseapp.com",
    databaseURL: "https://cybermatic.firebaseio.com",
    projectId: "cybermatic",
    storageBucket: "cybermatic.appspot.com",
    messagingSenderId: "572871665056"
  };
  firebase.initializeApp(config);

  console.log('Do you copy?')