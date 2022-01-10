import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqWA2XaQJ4wLlOqkGBRukWEj4_ddoz-zE",
  authDomain: "fire-contact-771bf.firebaseapp.com",
  databaseURL: "https://fire-contact-771bf-default-rtdb.firebaseio.com",
  projectId: "fire-contact-771bf",
  storageBucket: "fire-contact-771bf.appspot.com",
  messagingSenderId: "339245861256",
  appId: "1:339245861256:web:56ffd9a5622a51d837123d",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;