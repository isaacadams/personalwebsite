import * as firebase from 'firebase/app';
import 'firebase/database';
import myFirebase from './myFirebase';
const database = myFirebase.database;

/* export function GetSignInMethods() {
  auth
  .fetchSignInMethodsForEmail('isaac.d.adams@gmail.com')
  .then(r => console.log(r))
  .catch(e => console.log(e));
} */

export function writeUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
  })
  .then(r => console.log(r))
  .catch(e => console.log(e));
}

export function addWithNewKey(table, data, addToUpdate) {
  var key = database.ref().child(table).push().key;
  addToUpdate[`/${table}/${key}`] = data;
  return { table, key, data };
}

export interface ISubscribed<T> {
  value: T;
  tableReference: firebase.database.Reference;
}

export function read<T>(table, eventType: firebase.database.EventType = 'value'): Promise<ISubscribed<T>> {
  let tableRef = database.ref(table)
  return tableRef.once(eventType).then(snapshot => ({
    value: snapshot.val(),
    tableReference: tableRef
  }));
}

  
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