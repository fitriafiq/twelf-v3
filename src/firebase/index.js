import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAY_KEFQ3mxmvxCcrt8jSQBcFtZGeQAU9Q',
  authDomain: 'nabielazuhaily.firebaseapp.com',
  projectId: 'nabielazuhaily',
  storageBucket: 'nabielazuhaily.appspot.com',
  messagingSenderId: '710270576557',
  appId: '1:710270576557:web:22d95e4a3874eaad6da324'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}