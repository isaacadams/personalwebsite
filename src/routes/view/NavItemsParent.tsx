import * as React from 'react';
import { NavItem } from './NavItem';
import { routeDefinitions } from '../RouteDefinitions';

export class NavItemsParent extends React.Component<any, any> {
    routes: any[];
    constructor(props) {
        super(props);
        this.state = {
            active: "/"
        };
        this.setActiveLink = this.setActiveLink.bind(this);
        this.routes = routeDefinitions.map(r => {
            return {
                text: r.name,
                href: r.path
            }
        })
    }
    setActiveLink(href: string) {
        this.setState({
            active: href
        });
    }
    render() {
        return (
            <ul className="navbar-nav mr-auto">
                {this.routes.map(r => 
                    <NavItem 
                        href={r.href} 
                        text={r.text} 
                        notifyParent={this.setActiveLink} 
                        active={this.state.active === r.href} 
                    />
                )}
            </ul>
        );
    }
}