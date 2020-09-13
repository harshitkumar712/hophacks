import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDsMPExSwY4eMsJfZZgUwwYADdkVW8JFuI",
  authDomain: "distcare-fd045.firebaseapp.com",
  databaseURL: "https://distcare-fd045.firebaseio.com",
  projectId: "distcare-fd045",
  storageBucket: "distcare-fd045.appspot.com",
  messagingSenderId: "927916724494",
  appId: "1:927916724494:web:771ae794ff93354641c75f",
  measurementId: "G-MQB3BDLSPX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
