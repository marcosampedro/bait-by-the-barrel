import Rebase from "re-base";
// import firebase from "firebase";

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjoLSTWnuDzk_JE3Fgh5p7cSq3hn7O1LQ",
    authDomain: "bait-by-the-barrel.firebaseapp.com",
    databaseURL: "https://bait-by-the-barrel.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;