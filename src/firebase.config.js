import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBeu4Ek15nBBmS4lZgveI19FabGTXzAvXs",
    authDomain: "restaurantapp-aa2c4.firebaseapp.com",
    databaseURL: "https://restaurantapp-aa2c4-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-aa2c4",
    storageBucket: "restaurantapp-aa2c4.appspot.com",
    messagingSenderId: "770285377210",
    appId: "1:770285377210:web:d405dfd722f356d6a31483"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)  // to avoid creating new ref whenever we refresh the page

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app,firestore,storage}








