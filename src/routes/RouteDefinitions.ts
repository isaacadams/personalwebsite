import { RouteBuilder } from './RouteBuilder';
import { Home } from '../Components/Home';
import { Projects } from '../Components/Projects';
import { Gallery } from '../Components/Gallery';

/* function CreateRoute(name: string, component: any, icon: string, home = false) {
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
}; */

const routeDefinitions = new RouteBuilder()
    .add("Home", "/", Home, o => {
        o.exact = true;
    })
    .add("Projects", "/projects", Projects)
    .add("Gallery", "/gallery", Gallery)
    .build();

export { routeDefinitions };