import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import myFirebase from './firebase';

export default withFirebaseAuth({
    providers: myFirebase.providers,
    firebaseAppAuth: myFirebase.auth,
});