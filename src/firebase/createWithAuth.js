import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';

import myFirebase from './firebase';
const firebaseAppAuth = myFirebase.app.auth();
export default withFirebaseAuth({
    providers: myFirebase.providers,
    firebaseAppAuth,
});