import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import myFirebase from './myFirebase';

export default withFirebaseAuth({
  providers: myFirebase.providers,
  firebaseAppAuth: myFirebase.auth,
});
