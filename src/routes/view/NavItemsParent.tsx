import * as React from 'react';
import { NavItem } from './NavItem';
import { NavDropdownItem } from './NavDropdownItem';
import { routeDefinitions } from '../RouteDefinitions';
import { RouteModels } from '../RouteModels';


export class NavItemsParent extends React.Component<any, any> {
    projectDropdown: any[];
    mainNavItems: any[];

    constructor(props) {
        super(props);
        this.state = {
            active: "/"
        };
        this.setActiveLink = this.setActiveLink.bind(this);
        
        this.mainNavItems = routeDefinitions.asArray().reduce(function (accum, r, i, arr) {
            /* if(r.name !== "Projects")
                accum.push(createRouteLink(r));
            else
                self.projectDropdown = [createRouteLink(r)]; */
            accum.push(createRouteLink(r));
            return accum;
        }, []);
    }
    setActiveLink(href: string) {
        this.setState({
            active: href
        });
    }
    render() {
        return (
            <ul className="navbar-nav list-inline mx-auto justify-content-center">
                {this.mainNavItems.map((r, i) => 
                    <NavItem 
                        key={i}
                        href={r.href} 
                        text={r.name} 
                        notifyParent={this.setActiveLink} 
                        active={this.state.active === r.href} 
                    />
                )}
                {/* <NavDropdownItem links={this.projectDropdown} name="Projects" /> */}
            </ul>
        );
    }
}

function createRouteLink({name, path}: RouteModels.Definition) {
    return {
        name,
        href: path
    };
}