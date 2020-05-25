import * as React from 'react';
import createWithAuth from '../../firebase/createWithAuth';
import { WrappedComponentProps } from 'react-with-firebase-auth';
import BlogPostRepository, { IBlogPostWithKey, BlogPost } from '../../firebase/BlogPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowLoading } from '../Shared/ShowLoading';
import { Box, Grommet } from 'grommet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AddBlogPost } from './AddBlogPost';
import { BlogPostView } from './BlogPostView';
import { BlogFeed } from './BlogFeed';

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
                                <BlogFeed posts={posts} />
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

export default createWithAuth(Blog);