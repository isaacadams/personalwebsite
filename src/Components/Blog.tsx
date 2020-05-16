import * as React from 'react';
import createWithAuth from '../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import BlogPostRepository, { BlogPost } from '../firebase/BlogPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Blog({user, error, loading }: WrappedComponentProps) {
    
    let [posts, setPosts] = React.useState<BlogPost[]>([]);

    //console.log("Hello Worlds");
    let blogPostRepo = new BlogPostRepository();

    React.useEffect(() => {
        refreshPosts();
    }, [user]);

    return (
        <div className="row">
            <div></div>
            <div className="col-6">
                {user && <AddBlogPost uid={user.uid} refreshPosts={refreshPosts} />}
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

    function refreshPosts(){
        if(user) blogPostRepo.readUserPosts(user.uid).then(r => setPosts(r));
    }
}

function AddBlogPost({ uid, refreshPosts }) {
    let [content, setContent] = React.useState("");
    let blogPostRepo = new BlogPostRepository();

    return (
        <div className="row">
            <div className="col-12 d-flex flex-column">
                <textarea value={content} onChange={e => setContent(e.currentTarget.value)} />
                <div className="pt-3 d-flex justify-content-end">
                    <button className="btn btn-outline-dark fa-plus" onClick={onAdd}><FontAwesomeIcon icon={["fas", "plus"]} /> Create Post</button>
                </div>
            </div>
        </div>
    );

    function onAdd(e) {
        blogPostRepo.writeNewPost({ uid, author: "Isaac Adams", title: "testing", body: content }).finally(refreshPosts);
        setContent("");
    }
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