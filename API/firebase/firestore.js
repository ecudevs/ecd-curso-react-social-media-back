
import firebase from 'firebase';
import 'firebase/storage';
import config from './firestoreCredentials'

try {
    firebase.initializeApp(config);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('e', err.stack)
    }
}

const firestoreRef = firebase.firestore();
const storageRef = firebase.storage();

export { firestoreRef, storageRef }