// Import the functions you need from the SDKs you need
const {initializeApp } = require("firebase/app");
const {getAuth} =  require("firebase/auth");
const {getFirestore} = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIX3Qhv5ouCv3typNMFk0YlgMWPUM044Y",
  authDomain: "testapp-cde6a.firebaseapp.com",
  projectId: "testapp-cde6a",
  storageBucket: "testapp-cde6a.appspot.com",
  messagingSenderId: "60400549075",
  appId: "1:60400549075:web:b5745f8fedce16fc486826",
  measurementId: "G-116QZQP7CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

module.exports = {auth, db}
