import React from 'react';
import {HorizontalNavigationBar} from './HorizontalNavigationBar';
import {NavigationMenu} from './NavigationMenu';
import useWindowSize, {sizes} from '../../Components/Shared/useWindowSize';
import RouteDefinitions from '../RouteDefinitions';

const routes = RouteDefinitions.GetAllRoutes();

export function Navigation() {
  const [width, height] = useWindowSize();
  if (width < sizes.medium) return <NavigationMenu routes={routes} />;

  return <HorizontalNavigationBar routes={routes} />;
}
