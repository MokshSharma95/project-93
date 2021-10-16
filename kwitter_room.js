//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB_3Gl16qtumQRZuys2rAV_Ej_2kXYc82s",
    authDomain: "project93work.firebaseapp.com",
    projectId: "project93work",
    storageBucket: "project93work.appspot.com",
    messagingSenderId: "795362417889",
    appId: "1:795362417889:web:0c395fe29783ea5e08eba0",
    measurementId: "G-TDKD1L6G46"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
