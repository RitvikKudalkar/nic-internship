import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApc4RlUV_jEm9bCzrpTt9xeBsM3pOednQ",
  authDomain: "nic-app-b23e5.firebaseapp.com",
  projectId: "nic-app-b23e5",
  storageBucket: "nic-app-b23e5.appspot.com",
  messagingSenderId: "944515554115",
  appId: "1:944515554115:web:12772a2eb99f457f616df6",
  measurementId: "G-BQ48DVTK3Y",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
