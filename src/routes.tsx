import * as React from 'react';
import * as $ from 'jquery';
import { Link, Switch, Route, } from 'react-router-dom';
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

routes.dom =
    <ul className="routes">
        {routes.data.map((route, i) => (
            <li key={i}>
                <Link to={route.path}><span className={`fa fa-${route.icon}`}></span>{route.name}</Link>
            </li>
        ))}
    </ul>;

interface state {
    isSidebarShowing: boolean;
}

export class CustomRouter extends React.Component<any, state> {
    mobilenavOnClickHandler: React.MouseEventHandler
    mobilenavOnBlurHandler: React.FocusEventHandler
    sidebarOnScrollHandler: React.UIEventHandler
    constructor(props: any) {
        super(props);
        let self = this;

        self.state = {
            isSidebarShowing: false
        }
        
        function sidebarToggle(display?: boolean) {
            console.log(display);
            let isDisplaying = display === undefined ? self.state.isSidebarShowing : !display;
            
            let mobilenav = $.default('#mobilenav');
            let sidebar = $.default('#sidebar');

            let icons = {
                bars: 'fa-bars',
                times: 'fa-times'
            };

            if (isDisplaying) {
                sidebar.hide();
                mobilenav.removeClass(icons.times);
                mobilenav.addClass(icons.bars);
            } else {
                sidebar.show();
                mobilenav.removeClass(icons.bars);
                mobilenav.addClass(icons.times);
            }
            
            self.setState({
                isSidebarShowing: !isDisplaying
            });            
        }

        $.default(document).click(function (e) {
            //if clicking outside of sidebar

            let sidebarOrMobilenavSelected = isTargetOrParent(e.target, 'sidebar') || isTargetOrParent(e.target, 'mobilenav');

            if (!sidebarOrMobilenavSelected && self.state.isSidebarShowing) {
                //do stuff
                sidebarToggle(false);
            }
        });

        function isTargetOrParent(target, elementId) {
            return target.id === elementId || $.default(target).parents('#' + elementId).length > 0;
        }

        this.mobilenavOnClickHandler = (event: React.MouseEvent): void => {
            sidebarToggle();
        };
    }

    render() {
        return (
            <div>
                <nav>
                    <a id="mobilenav" className="fa fa-bars" onClick={this.mobilenavOnClickHandler} ></a>
                    {routes.dom}
                </nav>
                <div id="sidebar">
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
        )
    }    
};