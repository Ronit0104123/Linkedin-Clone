import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrjw--Lqq7Yt28CVhNCVKPE6F0-8s1lcY",
  authDomain: "linkedin-clone-7b870.firebaseapp.com",
  projectId: "linkedin-clone-7b870",
  storageBucket: "linkedin-clone-7b870.appspot.com",
  messagingSenderId: "435599714705",
  appId: "1:435599714705:web:79f7119ef68188750d5230"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
