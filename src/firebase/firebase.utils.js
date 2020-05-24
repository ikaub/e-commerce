import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyChDHqYd-1Ia0wKpP2wwxSrR85PSMdl2Dc",
    authDomain: "crwn-db-6ed61.firebaseapp.com",
    databaseURL: "https://crwn-db-6ed61.firebaseio.com",
    projectId: "crwn-db-6ed61",
    storageBucket: "crwn-db-6ed61.appspot.com",
    messagingSenderId: "729349326071",
    appId: "1:729349326071:web:acffae66309bcd020b7ff2",
    measurementId: "G-KJM0L0NC3Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('Error creating user', e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
