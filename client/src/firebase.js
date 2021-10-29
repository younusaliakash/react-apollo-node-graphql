import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLJXOGObmBb74zKAO1IHHI1WxtjCFpaiM",
    authDomain: "gql-react-node-6b872.firebaseapp.com",
    projectId: "gql-react-node-6b872",
    storageBucket: "gql-react-node-6b872.appspot.com",
    // messagingSenderId: "474854089582",
    appId: "1:474854089582:web:983af341ae9409fc48977f",
    measurementId: "G-RLQ4JTCWJJ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider();