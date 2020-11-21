import {config} from './config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let fb = firebase.default;

let app = fb.initializeApp(config);
const providers = {
    googleProvider: new fb.auth.GoogleAuthProvider(),
};

export default {
    providers,
    app,
    auth: fb.auth(),
    database: fb.database()
};