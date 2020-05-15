/// it is safe to expose the apiKey used here
/// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public

let projectId = "isaacadams-9baf0";
export const config = {
    apiKey: "AIzaSyAlEXLc7WKV5r3RP8HZpVJXz4eu7grOo-M",
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    storageBucket: `${projectId}.appspot.com`
};