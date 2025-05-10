import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHwqGEinFxIVSia3MdAdr4M1wYRZ3iO_s",
  authDomain: "jewelos.firebaseapp.com",
  projectId: "jewelos",
  storageBucket: "jewelos.firebasestorage.app",
  messagingSenderId: "870266867836",
  appId: "1:870266867836:web:e4fb2cd717c16e868979f9",
  measurementId: "G-7J218827YX"
};

// Initialize Firebase (but only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Initialize analytics only on client-side (browser) environment
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, auth, storage, analytics }; 