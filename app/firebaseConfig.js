import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {

  apiKey: "AIzaSyDk7HN5F79p4DlnHZY_89bwvGEGKQzgOjQ",

  authDomain: "featherdex-b82d4.firebaseapp.com",

  projectId: "featherdex-b82d4",

  storageBucket: "featherdex-b82d4.appspot.com",

  messagingSenderId: "857180930024",

  appId: "1:857180930024:web:59df396a2ad3a15980ae5d"

};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth }