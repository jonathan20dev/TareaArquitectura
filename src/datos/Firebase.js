import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5CXgJ9ZjrvxTKMhQeXyuMrXWTrENuPkA',
  authDomain: 'mumo-store.firebaseapp.com',
  projectId: 'mumo-store',
  storageBucket: 'mumo-store.appspot.com',
  messagingSenderId: '615683271951',
  appId: '1:615683271951:web:c8fd58fc648cfabda7e27a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };