import * as firebase from 'firebase/app';
import {config} from './config';

const app = firebase.initializeApp(config);
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default {
    providers,
    app
};