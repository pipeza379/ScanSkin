import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDaME0Gbi99tBZtpCPpH9T7kLsATXZ_y9U",
    authDomain: "scanskinbe.firebaseapp.com",
    databaseURL: "https://scanskinbe.firebaseio.com",
    projectId: "scanskinbe",
    storageBucket: "",
    messagingSenderId: "509085725189",
    appId: "1:509085725189:web:c4423ef32e1412ba"
};

export default firebase.initializeApp(firebaseConfig)