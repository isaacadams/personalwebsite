import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import { routeDefinitions } from './RouteDefinitions';

class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Switch>
                {routeDefinitions.map((r, i) => (
                    <Route
                        key={i}
                        path={r.path}
                        exact={r.opts.exact}
                        component={p => <r.component {...p} />} />
                ))}
                <Route path="/*">
                    <span>ERROR 404</span>
                </Route>
            </Switch>
        )
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
    
export { Routes, routeDefinitions }