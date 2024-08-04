// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore' 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCz3L7G3i_ywmpmE8UDGsn7rMAwwl4im4",
  authDomain: "hspantry-73484.firebaseapp.com",
  projectId: "hspantry-73484",
  storageBucket: "hspantry-73484.appspot.com",
  messagingSenderId: "833377877208",
  appId: "1:833377877208:web:41daba7e36c3a34b25abad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore= getFirestore(app)
export {app,firestore}