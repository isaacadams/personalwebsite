import '@isaacadams/extensions';
import firebase from './firebase';
import { read, addWithNewKey } from './database';
const database = firebase.database;

export class BlogPost {
    author: string;
    uid: string;
    body: string;
    title: string
}

export default class BlogPostRepository {
    
    writeNewPost(post: BlogPost) {
        if(!post.body || post.body.isNullOrWhitespace()) return Promise.reject("invalid post");

        var updates = {};
        let metaPostData = addWithNewKey('posts', post, updates);
        addWithNewKey('user-posts/' + post.uid, metaPostData.key, updates);
        return database.ref().update(updates);
    }

    async readUserPosts(uid: string) {
        const r = await read('user-posts/' + uid);
        if(!r) return Promise.reject("there were no records");

        const promises = Object.values(r).map(key => read('posts/' + key));
        return Promise.all(promises);
    }
}