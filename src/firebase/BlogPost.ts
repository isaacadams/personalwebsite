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

export interface IBlogPostWithKey {
    primaryKey: string,
    post: BlogPost
}

export default class BlogPostRepository {
    
    writeNewPost(post: BlogPost) {
        if(!post.body || post.body.isNullOrWhitespace()) return Promise.reject("invalid post");

        var updates = {};
        let metaPostData = addWithNewKey('posts', post, updates);
        addWithNewKey('user-posts/' + post.uid, metaPostData.key, updates);
        return database.ref().update(updates);
    }

    async readUserPosts(uid: string): Promise<IBlogPostWithKey[]> {
        const r = await read('user-posts/' + uid);
        if(!r) return Promise.reject("there were no records");

        const promises = Object.values(r)
            .map(primaryKey => 
                read<BlogPost>('posts/' + primaryKey)
                .then(post => ({ primaryKey, post }))
            );
        return Promise.all(promises);
    }

    readPost(primaryKey: string): Promise<IBlogPostWithKey> {
        let promise = read<BlogPost>('posts/' + primaryKey);

        if(!promise) return Promise.reject("there were no records");
        
        return promise.then(post => ({ primaryKey, post }));
    }
}