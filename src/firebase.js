import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// const app = firebase.initializeApp({
//     apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_FIREBASE_APP_ID
// });
// firebase.analytics();
var app = firebase.initializeApp({
    apiKey: "AIzaSyDLyb6hp6hpl_90poGNORmG80VXtfloCf0",
    authDomain: "sam-msn-clone.firebaseapp.com",
    projectId: "sam-msn-clone",
    storageBucket: "sam-msn-clone.appspot.com",
    messagingSenderId: "4791935814",
    appId: "1:4791935814:web:c559e02c440c6e6016bb47"
});


export const auth =  app.auth();
export const firestore= app.firestore()
export const storage = app.storage();

export default app
