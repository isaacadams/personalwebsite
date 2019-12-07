export namespace RouteModels {
    export class Options {
        exact: boolean;
        routes: Definition[];
    }

    export class Definition {
        name: string;
        path: string;
        component: any;
        opts: Options;
        constructor(name: string, path: string, comp: any, opts: Options = { exact: false, routes: [] }) {
            this.name = name;
            this.path = path;
            this.component = comp;
            this.opts = opts;
        }
    }
}