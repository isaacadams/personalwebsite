import { RouteProps } from "react-router-dom";


export namespace RouteModels {
    export class Definition {
        name: string;
        config: RouteProps;
        view: ViewOptions;
        constructor(name: string, config: RouteProps = { exact: false }, view: ViewOptions = {}) {
            this.name = name;
            this.config = config;
            this.view = view;
        }

        GetPathToRoute(): string {
            let path = this.config.path;
            if(typeof path === "string" ) return path;
            return path[0];
        }
    }

    export interface ViewOptions {
        name?: string;
        icon?: any;
    }
}