import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC5iEdPxuwFNSgITBzRqmQSf0VUCHDk_F4",
    authDomain: "slack-clone-f06f0.firebaseapp.com",
    databaseURL: "https://slack-clone-f06f0.firebaseio.com",
    projectId: "slack-clone-f06f0",
    storageBucket: "slack-clone-f06f0.appspot.com",
    messagingSenderId: "326941869298",
    appId: "1:326941869298:web:8217dbf7fbacdd48b0bc6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {
    auth,
    provider
}
export default db;
