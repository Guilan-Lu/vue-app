import Vue from "vue";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebaseConfig";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDx-NPNDyQBUPjZiTk2iJs15jytMjbNOm8",
//   authDomain: "apple-1d0e8.firebaseapp.com",
//   databaseURL: "https://apple-1d0e8.firebaseio.com",
//   projectId: "apple-1d0e8",
//   storageBucket: "apple-1d0e8.appspot.com",
//   messagingSenderId: "92903898943",
//   appId: "1:92903898943:web:a3df0809a2011b68e45d8a",
//   measurementId: "G-NHQ6YZ1KFW"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .collection("test")
  .add({ test: "aaa" })
  .then(r => console.log(r))
  .catch(e => console.error(e));
