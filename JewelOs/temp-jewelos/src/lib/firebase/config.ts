import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBHwqGEinFxIVSia3MdAdr4M1wYRZ3iO_s",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "jewelos.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "jewelos",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "jewelos.appspot.com", 
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "870266867836",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:870266867836:web:e4fb2cd717c16e868979f9",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-7J218827YX"
};

// Initialize Firebase (but only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Enable Auth persistence
auth.useDeviceLanguage(); // Set language to device's language

// Initialize analytics only on client-side (browser) environment
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, auth, storage, analytics }; 