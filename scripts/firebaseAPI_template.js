//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyAL5F-ENl4yqG_1-FuKzS3cd3ufx_l84rk",
    authDomain: "comp1800-2024.firebaseapp.com",
    projectId: "comp1800-2024",
    storageBucket: "comp1800-2024.appspot.com",
    messagingSenderId: "319768129623",
    appId: "1:319768129623:web:8529627a7c27d05ba9f312"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
