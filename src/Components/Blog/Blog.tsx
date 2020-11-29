import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {BlogPostView} from './BlogPostView';
import {BlogFeed} from './BlogFeed';

// text editors
// https://reactjsexample.com/tag/editor/

export function Blog({}) {
  let {path, url} = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <BlogFeed />
      </Route>
      <Route path={`${path}/:postId`}>
        <BlogPostView />
      </Route>
    </Switch>
  );
}
