import firebase from './firebase';
import { read, addWithNewKey } from './database';
const database = firebase.database;

class BlogPost {
    author: string;
    uid: string;
    body: string;
    title: string
}

export class BlogPostRepository {
    
    writeNewPost(post: BlogPost) {
        var updates = {};
        let metaPostData = addWithNewKey('posts', post, updates);
        addWithNewKey('user-posts/' + post.uid, metaPostData.key, updates);
        return database.ref().update(updates);
    }

    async readUserPosts(uid: string) {
        const r = await read('user-posts/' + uid);
        const promises = Object.values(r).map(key => read('posts/' + key));
        return Promise.all(promises);
    }
}