import { initializeApp } from "firebase/app"
import {
  getFirestore
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBV6tP6MQxXBuX-HCMoty-vzYiZ3lWhnhg",
  authDomain: "getting-started-firebase-9.firebaseapp.com",
  projectId: "getting-started-firebase-9",
  storageBucket: "getting-started-firebase-9.appspot.com",
  messagingSenderId: "520474884624",
  appId: "1:520474884624:web:190538b66590de64f8a895"
};


// init firebase app
initializeApp(firebaseConfig)

// init firestore services
const db = getFirestore()

export { db }