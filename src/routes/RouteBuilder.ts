import { RouteModels } from './RouteModels';

export class RouteBuilder {
    routes: RouteModels.Definition[];
    constructor() {
        this.routes = [];
    }
    add(name: string, path: string, component: any, 
    opts: (opts: RouteModels.Options) => void = null): RouteBuilder {
        let r = new RouteModels.Definition(name, path, component);
        if (opts) {
            r.opts = new RouteModels.Options();
            opts(r.opts);
        }
        this.routes.push(r);
        return this;
    }
    build() {
        return this.routes;
    }
}
