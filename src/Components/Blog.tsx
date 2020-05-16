import * as React from 'react';
import createWithAuth from '../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import BlogPostRepository, { BlogPost } from '../firebase/BlogPost';

function Blog({user, error, loading }: WrappedComponentProps) {
    let [content, setContent] = React.useState("");
    let [posts, setPosts] = React.useState<BlogPost[]>([]);

    //console.log("Hello Worlds");
    let blogPostRepo = new BlogPostRepository();

    React.useEffect(() => {
        if(user) blogPostRepo.readUserPosts(user.uid).then(r => setPosts(r));
    }, [user]);

    return (
        <div className="row">
            <div className="col-6">
                <button className="btn btn-outline-dark" onClick={() => blogPostRepo.writeNewPost({ uid: user.uid, author: "Isaac Adams", title: "testing", body: content })}>Post</button>
                <textarea value={content} onChange={e => setContent(e.currentTarget.value)} />
            </div>
            <div className="col-6">
                <button className="btn btn-outline-dark" onClick={() => blogPostRepo.readUserPosts(user.uid).then(r => setPosts(r))}>Read</button>
                {posts.map((p, i) => 
                    <div className="pt-4" key={i}>
                        <BlogPostView {...p} />
                    </div>)}
            </div>
        </div>
    );
}

function BlogPostView({title, body, author}: BlogPost) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <small>written by {author}</small>
        </div>
    );
}

export default createWithAuth(Blog);