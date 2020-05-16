import {config} from './config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let app = firebase.initializeApp(config);
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default {
    providers,
    app,
    auth: firebase.auth(),
    database: firebase.database()
};