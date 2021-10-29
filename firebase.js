import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAMC0FaWwy9A290HvhaR9R4f396w8HpuGE",
    authDomain: "foodapp-8b49b.firebaseapp.com",
    projectId: "foodapp-8b49b",
    storageBucket: "foodapp-8b49b.appspot.com",
    messagingSenderId: "36913943623",
    appId: "1:36913943623:web:9b0c42ad15200170edcd62"
  };
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase; 