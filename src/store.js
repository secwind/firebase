import { createStore, combineReducers, compose } from 'redux'
import firebase from 'firebase'
import 'firebase/firestore' 
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
// Reducers
// @todo

    const firebaseConfig = {
        apiKey: "AIzaSyCB2N-wrggVRKJDFUGmEJ0WuGX9S6NpMC8",
        authDomain: "secwind-76f9a.firebaseapp.com",
        databaseURL: "https://secwind-76f9a.firebaseio.com",
        projectId: "secwind-76f9a",
        storageBucket: "secwind-76f9a.appspot.com",
        messagingSenderId: "1088715018471"
    };

        // react-redux-firebase config
    const rrfConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    }; 

        // Initialize firebase instance
        firebase.initializeApp(firebaseConfig);

        const firestore = firebase.firestore();
        const settings = { timestampsInSnapshots: true };
        firestore.settings(settings);
    
        // Add reactReduxFirebase enhancer when making store creator
    const createStoreWithFirebase = compose(
        reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
        reduxFirestore(firebase)
    )(createStore);  

        // Add firebase to reducers
    const rootReducer = combineReducers({
        firebase: firebaseReducer,
        firestore: firestoreReducer 
    }); 

        // Create store with reducers and initial state
    const initialState = {};

        // Create Store
        const store = createStoreWithFirebase(
            rootReducer,
            initialState,
            compose(
              reactReduxFirebase(firebase),
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );

    export default store;


    