import * as React from 'react';
import createWithAuth from '../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import { BlogPostRepository } from '../firebase/BlogPost';

function Blog({user, error, loading }: WrappedComponentProps) {
    let [content, setContent] = React.useState("");
    let [posts, setPosts] = React.useState([]);

    //console.log("Hello Worlds");

    React.useEffect(() => {
        if(user) new BlogPostRepository().readUserPosts(user.uid).then(r => setPosts(r));
    }, [user]);

    return (
        <div className="row">
            <div className="col-6">
                <button className="btn btn-outline-dark" onClick={() => new BlogPostRepository().writeNewPost({ uid: user.uid, author: "Isaac Adams", title: "testing", body: content })}>Post</button>
                <textarea value={content} onChange={e => setContent(e.currentTarget.value)} />
            </div>
            <div className="col-6">
                <button className="btn btn-outline-dark" onClick={() => new BlogPostRepository().readUserPosts(user.uid).then(r => setPosts(r))}>Read</button>
                {posts.map((p, i) => <div key={i}>
                    <BlogPostView {...p} />
                </div>)}
            </div>
        </div>
    );
}

function BlogPostView({title, body}) {
    return (
        <React.Fragment>
            <h3>{title}</h3>
            <p>{body}</p>
        </React.Fragment>
    );
}

export default createWithAuth(Blog);