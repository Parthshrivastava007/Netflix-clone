// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQpb110Imr0dn1eiaf_rgQXB7p-2N6EY",
  authDomain: "netflix-clone-00017.firebaseapp.com",
  projectId: "netflix-clone-00017",
  storageBucket: "netflix-clone-00017.firebasestorage.app",
  messagingSenderId: "710101569313",
  appId: "1:710101569313:web:c5853a8ca9c79a39dd7860",
  measurementId: "G-3BVQD3TDPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);