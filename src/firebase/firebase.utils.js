import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBy9WJyXQPHQCmMxmzskyRCt6N0IxrsHJc",
  authDomain: "e-commerce-db-2cae0.firebaseapp.com",
  projectId: "e-commerce-db-2cae0",
  storageBucket: "e-commerce-db-2cae0.appspot.com",
  messagingSenderId: "307363476793",
  appId: "1:307363476793:web:609b5f98bdeba85171e4e8",
  measurementId: "G-4DSLNC9LK8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
