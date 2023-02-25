// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getRemoteConfig } from 'firebase/remote-config';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {firebaseConfig} from '../../assets/firebase.config.js';
import {getDefaultRemoteConfigConfig} from "./remoteConfig.js";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const remoteConfig = getRemoteConfig(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

remoteConfig.defaultConfig = getDefaultRemoteConfigConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
