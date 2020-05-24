import * as React from 'react';
import createWithAuth from '../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import BlogPostRepository, { BlogPost } from '../firebase/BlogPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowLoading } from './Shared/ShowLoading';
import { Box, Button, TextArea, Grommet } from 'grommet';

function Blog({user, error, loading }: WrappedComponentProps) {
    
    let [posts, setPosts] = React.useState<BlogPost[]>([]);

    //console.log("Hello Worlds");
    let blogPostRepo = new BlogPostRepository();

    React.useEffect(() => {
        refreshPosts();
    }, [user]);
    
    if(loading) return <ShowLoading />;

    return (
        <div className="bootstrap-styles">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        {user && <AddBlogPost user={user} refreshPosts={refreshPosts} />}
                    </div>
                    <div className="col-12">
                        {(!posts || posts.length < 1) && <ShowLoading />}
                        {posts.map((p, i) => 
                            <div className="pt-4" key={i}>
                                <BlogPostView {...p} />
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );

    function refreshPosts(){
        if(user) blogPostRepo.readUserPosts(user.uid).then(r => setPosts(r));
    }
}

function AddBlogPost({ user, refreshPosts }: {user: firebase.User, refreshPosts: () => void}) {
    let [content, setContent] = React.useState("");
    let blogPostRepo = new BlogPostRepository();

    return (
        <div className="row">
            <div className="col-12 d-flex flex-column">
                <TextArea value={content} onChange={e => setContent(e.currentTarget.value)} />
                <div className="pt-3 d-flex justify-content-end">
                    <Button primary label="Submit" onClick={onAdd} />
                </div>
            </div>
        </div>
    );

    function onAdd(e) {
        blogPostRepo.writeNewPost({ uid: user.uid, author: user.displayName, title: "testing", body: content }).finally(refreshPosts);
        setContent("");
    }
}

function BlogPostView({title, body, author}: BlogPost) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button label={"Continue Reading..."} />
            {/* <small>written by {author}</small> */}
        </div>
    );
}

export default createWithAuth(Blog);