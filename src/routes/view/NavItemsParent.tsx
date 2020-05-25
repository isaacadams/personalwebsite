import * as React from 'react';
import { NavItem } from './NavItem';
import { NavDropdownItem } from './NavDropdownItem';
import RouteDefinitions from '../RouteDefinitions';
import { RouteModels } from '../RouteModels';
import { useLocation } from 'react-router-dom';

const routes = RouteDefinitions.GetNavbarRoutes().reduce(function (accum, r, i, arr) {
    /* if(r.name !== "Projects")
        accum.push(createRouteLink(r));
    else
        self.projectDropdown = [createRouteLink(r)]; */
        
    accum.push(createRouteLink(r));
    return accum;
}, []);

function createRouteLink(definition: RouteModels.Definition) {
    return {
        name: definition.name,
        href: definition.GetPathToRoute(),
        icon: definition.view.icon
    };
}

export function NavItemsParent(props){
    let location = useLocation();

    return(
        <ul className="navbar-nav list-inline mx-auto justify-content-center">
            {routes.map((r, i) => 
                <NavItem 
                    key={i}
                    href={r.href} 
                    text={
                        <div style={{display: "flex", alignItems: "center"}}>
                            {r.icon && <r.icon />}
                            <div style={{width: "1rem"}}></div>
                            <div>{r.name}</div>
                        </div>
                    }
                    active={location.pathname === r.href} 
                />
            )}
            {/* <NavDropdownItem links={this.projectDropdown} name="Projects" /> */}
        </ul>
    );
}