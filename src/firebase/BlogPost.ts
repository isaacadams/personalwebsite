import '@isaacadams/extensions';
import {read, addWithNewKey} from './database';
import * as firebase from 'firebase/app';
import {BlogPost, IBlogPostWithKey} from './useBlogPosts';
import { getFirebaseApp } from './FirebaseApp';
const {database} = getFirebaseApp();

export default class BlogPostRepository {
  writeNewPost(post: BlogPost) {
    if (!post.body || post.body.isNullOrWhitespace())
      return Promise.reject('invalid post');

    var updates = {};
    let metaPostData = addWithNewKey('posts', post, updates);
    addWithNewKey('user-posts/' + post.uid, metaPostData.key, updates);
    return database.ref().update(updates);
  }

  async readUserPosts(uid: string): Promise<IBlogPostWithKey[]> {
    const r = await read<any>('user-posts/' + uid);
    if (!r) return Promise.reject('there were no records');
    const promises = Object.values(r.value).map(this.readPostAsPromise);
    return Promise.all(promises);
  }

  async readPost(
    primaryKey: string,
    cb: (data: IBlogPostWithKey) => void
  ): Promise<firebase.default.database.Reference> {
    let promise = read<BlogPost>('posts/' + primaryKey);
    if (!promise) return Promise.reject('there were no records');
    let {tableReference, value} = await promise;
    cb({primaryKey, post: value});
    return tableReference;
  }

  async readPostAsPromise(primaryKey: string): Promise<IBlogPostWithKey> {
    let promise = read<BlogPost>('posts/' + primaryKey);
    if (!promise) return Promise.reject('there were no records');
    return promise.then((d) => ({primaryKey, post: d.value}));
  }
}
