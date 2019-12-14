import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-NM8LwqvMufozsbdvsEQUSqpriTxR96o",
    authDomain: "crown-db-117fd.firebaseapp.com",
    databaseURL: "https://crown-db-117fd.firebaseio.com",
    projectId: "crown-db-117fd",
    storageBucket: "crown-db-117fd.appspot.com",
    messagingSenderId: "14304789993",
    appId: "1:14304789993:web:a4ec4e6785aaf09a0a3778",
    measurementId: "G-FWLJLNQMGZ"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;