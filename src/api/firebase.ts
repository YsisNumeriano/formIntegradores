import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJVSO6B6RnO5qxEVWGpNF6tKDWyg29aWo",
  authDomain: "pojetos-integradores.firebaseapp.com",
  projectId: "pojetos-integradores",
  storageBucket: "pojetos-integradores.appspot.com",
  messagingSenderId: "142876262034",
  appId: "1:142876262034:web:206d4f0ba31f5dd1d2b04b",
  measurementId: "G-717N5CLH84"
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const db = getFirestore();