import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/// it is safe to expose the apiKey used here
/// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
export const config = createConfig(
  'AIzaSyAlEXLc7WKV5r3RP8HZpVJXz4eu7grOo-M',
  'isaacadams-9baf0'
);
firebase.default.initializeApp(config);

export function createConfig(apiKey, projectId) {
  return {
    apiKey: apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    storageBucket: `${projectId}.appspot.com`,
  };
}

export function getFirebaseApp() {
  let app = firebase.default.app();

  return {
    app,
    auth: app.auth(),
    database: app.database(),
  };
}
