//import * as firebase from 'firebase';
let firebase = require('firebase');
// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyAlEXLc7WKV5r3RP8HZpVJXz4eu7grOo-M",
  authDomain: "isaacadams-9baf0.firebaseapp.com",
  databaseURL: "https://isaacadams-9baf0.firebaseio.com",
  storageBucket: "isaacadams-9baf0.appspot.com"
};
let app = firebase.initializeApp(config);

app.auth()
  .fetchSignInMethodsForEmail('isaac.d.adams@gmail.com')
  .then(r => console.log(r))
  .catch(e => console.log(e));


// Get a reference to the database service
/* var database = firebase.database();

writeUserData('1','Isaac Adams',null, null);

function writeUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  })
  .then(r => console.log(r))
  .catch(e => console.log(e));
} */
  

  
/*   <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>
  
  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
  
  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAlEXLc7WKV5r3RP8HZpVJXz4eu7grOo-M",
      authDomain: "isaacadams-9baf0.firebaseapp.com",
      databaseURL: "https://isaacadams-9baf0.firebaseio.com",
      projectId: "isaacadams-9baf0",
      storageBucket: "isaacadams-9baf0.appspot.com",
      messagingSenderId: "642525532719",
      appId: "1:642525532719:web:2541cddb885db0f40e6cda"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  </script> */