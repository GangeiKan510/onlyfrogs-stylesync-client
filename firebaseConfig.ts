// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDJGyI8-shbb7ldd2yCR-XiAoB56_YED7g",
  authDomain: "onlyfroggs-stylesync.firebaseapp.com",
  databaseURL: "https://onlyfroggs-stylesync-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onlyfroggs-stylesync",
  storageBucket: "onlyfroggs-stylesync.appspot.com",
  messagingSenderId: "983938891217",
  appId: "1:983938891217:web:b67c4b0a611e57a02e74f0",
  measurementId: "G-444ZGL8R81"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth, getApp, getAuth };