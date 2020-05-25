import * as React from 'react';
import createWithAuth from '../../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import BlogPostRepository, { BlogPost, IBlogPostWithKey } from '../../firebase/BlogPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowLoading } from '../Shared/ShowLoading';
import { Box, Button, TextArea, Grommet, Markdown } from 'grommet';
import { useHistory, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

// text editors
// https://reactjsexample.com/tag/editor/

function Blog({user, error, loading }: WrappedComponentProps) {
    
    let [posts, setPosts] = React.useState<IBlogPostWithKey[]>([]);
    let blogPostRepo = new BlogPostRepository();

    React.useEffect(() => {
        refreshPosts();
    }, [user]);
    
    if(loading) return <ShowLoading />;

    let { path, url } = useRouteMatch();

    return (
        <div className="bootstrap-styles">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        {user && <AddBlogPost user={user} refreshPosts={refreshPosts} />}
                    </div>
                    <div className="col-12">
                        <Switch>
                            <Route exact path={path}>
                                {(!posts || posts.length < 1) && <ShowLoading />}
                                {posts.map((p, i) => 
                                    <div className="pt-4" key={i}>
                                        <ShortenedBlogPostView {...p} />
                                    </div>)}
                            </Route>
                            <Route path={`${path}/:postId`}>
                                <BlogPostView />
                            </Route>
                        </Switch>
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
        blogPostRepo
            .writeNewPost({ 
                uid: user.uid, 
                author: user.displayName, 
                title: "testing", 
                body: content 
            })
            .finally(refreshPosts);

        setContent("");
    }
}

function ShortenedBlogPostView({ primaryKey, post }: IBlogPostWithKey) {
    let {title, body, author } = post;
    let history = useHistory();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{title}</h3>
            <Markdown>{body}</Markdown>
            <div>
                <Button label={"Continue Reading..."} onClick={() => {
                    history.push(`blog/${primaryKey}`);
                }} />
            </div>
            {/* <small>written by {author}</small> */}
        </div>
    );
}

function BlogPostView(props){
    let { postId } = useParams();
    let [post, setPost] = React.useState<BlogPost>(null);
    
    React.useEffect(() => {
        new BlogPostRepository()
            .readPost(postId)
            .then(r => setPost(r.post));
    });

    if(!post) return <ShowLoading />;

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>{post.title}</h3>
            <Markdown>{post.body}</Markdown>
        </div>
    );
}

export default createWithAuth(Blog);