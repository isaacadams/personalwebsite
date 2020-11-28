import React from 'react';
import {useHistory} from 'react-router-dom';
import {Menu} from 'grommet';
import * as Icons from 'grommet-icons';
import {NavItemView} from './NavItemView';
import {RouteModels} from '../RouteModels';

export function NavigationMenu({routes}: {routes: RouteModels.Definition[]}) {
  const history = useHistory();
  return (
    <Menu
      fill="horizontal"
      icon={<Icons.Menu />}
      label={'Menu'}
      items={routes.map((r) => ({
        label: <NavItemView name={r.name} Icon={r.view.icon} />,
        onClick: () => {
          history.push(r.GetPathToRoute());
        },
      }))}
    />
  );
}
