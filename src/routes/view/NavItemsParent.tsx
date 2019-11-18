import * as React from 'react';
import { NavItem } from './NavItem';
import { NavDropdownItem } from './NavDropdownItem';
import { routeDefinitions } from '../RouteDefinitions';



export class NavItemsParent extends React.Component<any, any> {
    projectDropdown: any[];
    mainNavItems: any[];

    constructor(props) {
        super(props);
        this.state = {
            active: "/"
        };
        this.setActiveLink = this.setActiveLink.bind(this);
        
        let self = this;
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
            <ul className="navbar-nav mr-auto">
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

function createRouteLink(route) {
    return {
        name: route.name,
        href: route.path
    };
}