// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'react-perfomance-review.firebaseapp.com',
  projectId: 'react-perfomance-review',
  storageBucket: 'react-perfomance-review.appspot.com',
  messagingSenderId: '1047358787303',
  appId: '1:1047358787303:web:cd90f9f919bef237bbdc42',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();
