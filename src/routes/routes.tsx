import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import RouteDefinitions from './RouteDefinitions';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        {RouteDefinitions.GetAllRoutes().map((r, i) => (
          <Route
            key={i}
            path={r.config.path}
            exact={r.config.exact}
            component={(p) => <r.config.component {...p} />}
          />
        ))}
        {/* <Route path="/*">
                    <span>ERROR 404</span>
                </Route> */}
        <Redirect from="/*" to="/" />
      </Switch>
    );
  }
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(r) {
  return (
    <Route
      path={r.path}
      component={r.component}
      /* render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )} */
    />
  );
}

export {Routes, RouteDefinitions};
