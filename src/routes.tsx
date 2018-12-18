import * as React from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { Gallery } from './Components/Gallery';

function CreateRoute(name: string, component: any, icon: string, home = false) {
    return {
        path: "/" + (home ? "" : name),
        name: name,
        component: component,
        home: home,
        icon: icon
    };
}

const routes = [
    CreateRoute("home", Home, 'home', true),
    CreateRoute("projects", Projects, 'laptop'),
    CreateRoute("gallery", Gallery, 'camera')
];

export class CustomRouter extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        let welcome = <div>
            <p>Welcome, my name is</p>
            <h3>Isaac Adams</h3>
        </div>;

        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            {routes.map((route, i) => (
                                <li key={i}>
                                    <Link to={route.path}><span className={`fa fa-${route.icon}`}></span>{route.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <header>
                    </header>
                    <main>                    
                        <Switch>
                            {routes.map((route, i) => (
                                <Route
                                    key={i}
                                    path={route.path}
                                    component={route.component}
                                    exact={route.home}
                                />
                            ))}
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }    
};