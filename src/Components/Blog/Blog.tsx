import * as React from 'react';
import createWithAuth from '../../firebase/createWithAuth';
import {WrappedComponentProps} from 'react-with-firebase-auth';
import {ShowLoading} from '../Shared/ShowLoading';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {AddBlogPost} from './AddBlogPost';
import {BlogPostView} from './BlogPostView';
import {BlogFeed} from './BlogFeed';
import {useBlogPosts} from '../../firebase/useBlogPosts';

// text editors
// https://reactjsexample.com/tag/editor/

function Blog({user, error, loading}: WrappedComponentProps) {
  if (loading) return <ShowLoading />;

  let {data, ...blogProps} = useBlogPosts();

  console.log(data);

  let {path, url} = useRouteMatch();

  return (
    <div className="bootstrap-styles">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            {user && <AddBlogPost user={user} refreshPosts={() => {}} />}
          </div>
          <div className="col-12">
            <Switch>
              <Route exact path={path}>
                {!blogProps?.loading && <BlogFeed posts={data} />}
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
}

export default createWithAuth(Blog);
