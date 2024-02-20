//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
      apiKey: "AIzaSyAQRwAVZE-853a4LJFWLcJA3pmrq_H4xkw",
      authDomain: "fir-d6348.firebaseapp.com",
      projectId: "fir-d6348",
      storageBucket: "fir-d6348.appspot.com",
      messagingSenderId: "102578748717",
      appId: "1:102578748717:web:fad6719b64b2e4a40de7a4",
      measurementId: "G-GQ24THGM32"
    };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
