import * as React from 'react';
import createWithAuth from '../../firebase/createWithAuth';
import {WrappedComponentProps} from 'react-with-firebase-auth';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {AddBlogPost} from './AddBlogPost';
import {BlogPostView} from './BlogPostView';
import {BlogFeed} from './BlogFeed';
import {useBlogPosts} from '../../firebase/useBlogPosts';
import Loader from '../Shared/Loader';

// text editors
// https://reactjsexample.com/tag/editor/

function Blog({user, error, loading}: WrappedComponentProps) {
  if (loading) return <Loader />;

  let {data, ...blogProps} = useBlogPosts();
  let {path, url} = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        {user && <AddBlogPost user={user} refreshPosts={() => {}} />}
        {!blogProps?.loading && <BlogFeed posts={data} />}
      </Route>
      <Route path={`${path}/:postId`}>
        <BlogPostView />
      </Route>
    </Switch>
  );
}

export default createWithAuth(Blog);
