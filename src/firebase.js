import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDMGlh1OrxoEiGd_Mk-iGs_Goc8kDSuSAY",
  
    authDomain: "tinder-clone-9d38b.firebaseapp.com",
  
    projectId: "tinder-clone-9d38b",
  
    storageBucket: "tinder-clone-9d38b.appspot.com",
  
    messagingSenderId: "778047241129",
  
    appId: "1:778047241129:web:6c52c3dfec9b4086fc62b8",
  
    measurementId: "G-LXMC1FSHR7"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;