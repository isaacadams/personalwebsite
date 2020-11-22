import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Anchor} from 'grommet';
import {RouteModels} from '../RouteModels';

export function HorizontalNavigationBar({
  routes,
}: {
  routes: RouteModels.Definition[];
}) {
  return (
    <Nav
      direction="row"
      alignSelf="center"
      alignContent="center"
      responsive={true}
    >
      {routes.map((r, i) => (
        <Link to={r.GetPathToRoute()} key={i}>
          <Anchor icon={<r.view.icon />} label={r.name} as="div" />
        </Link>
      ))}
    </Nav>
  );
}
