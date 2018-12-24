import * as React from 'react';
import * as $ from 'jquery';
import { Link, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
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

const routes = {
    dom: undefined,
    data: [
        CreateRoute("home", Home, 'home', true),
        CreateRoute("projects", Projects, 'laptop'),
        CreateRoute("gallery", Gallery, 'camera')
    ]
};

export class CustomRouter extends React.Component<any, any> {
    toggleSidebar: React.MouseEventHandler
    constructor(props: any) {
        super(props);

        routes.dom =
            <ul className="routes">
                {routes.data.map((route, i) => (
                    <li key={i}>
                        <Link to={route.path}><span className={`fa fa-${route.icon}`}></span>{route.name}</Link>
                    </li>
                ))}
            </ul>;

        this.toggleSidebar = (event: React.MouseEvent): void => {
            let mobilenav = $.default(event.target);
            let sidebar = $.default('.sidebar');
            let icons = ['fa-bars', 'fa-times'];

            sidebar.toggle();

            function toggleIcons(element: JQuery<any>, icons: string[]) {
                let one = icons[0];
                let two = icons[1];

                if (element.hasClass(one)) {
                    element.removeClass(one);
                    element.addClass(two);
                }
                else {
                    element.removeClass(two);
                    element.addClass(one);
                }                
            }

            toggleIcons(mobilenav, icons);
        }
    }

    //toggleSidebar() {

    //    


    //    //if (!sidebar || sidebar.length === 0) {
    //    //    let domRoutes = $.default('.routes');
    //    //    domRoutes.remove();
    //    //    $.default('nav').after(domRoutes);
    //    //    $.default('.routes').wrap("<div class='sidebar' />");
    //    //}
    //    //else {
    //    //    sidebar.toggle();
    //    //}

    //}

    render() {
        
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <span className="mobilenav fa fa-bars" onClick={this.toggleSidebar}></span>
                        {routes.dom}
                    </nav>
                    <div className="sidebar">
                        {routes.dom}
                    </div>
                    <header>
                    </header>
                    <main>                    
                        <Switch>
                            {routes.data.map((route, i) => (
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