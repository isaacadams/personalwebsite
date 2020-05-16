import * as React from 'react';
import {GetSignInMethods, writeNewPost, readUserPosts} from '../firebase/database';
import createWithAuth from '../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';

function Blog({
    user,
    error,
    loading,
  }: WrappedComponentProps) {
    let [content, setContent] = React.useState("");
    let [posts, setPosts] = React.useState([]);
    return (
        <div className="row">
            <div className="col-6">
                <button className="btn btn-outline-dark" onClick={() => writeNewPost(user.uid, "Isaac Adams", "testing", content)}>Post</button>
                <textarea value={content} onChange={e => setContent(e.currentTarget.value)} />
            </div>
            <div className="col-6">
                <button className="btn btn-outline-dark" onClick={() => readUserPosts(user.uid).then(r => setPosts(r))}>Read</button>
                {posts.map((p, i) => <div key={i}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </div>)}
            </div>
        </div>
    );
  }

export default createWithAuth(Blog);