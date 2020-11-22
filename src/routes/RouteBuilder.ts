import {RouteModels} from './RouteModels';
import {RouteProps} from 'react-router-dom';
import {config} from '../../dist/src.a094dec4';

export class RouteBuilder {
  route: RouteModels.Definition;

  constructor(name: string) {
    this.route = new RouteModels.Definition(name, {});
  }

  AddRouteConfig(configureOptions: (opts: RouteProps) => void) {
    configureOptions(this.route.config);
  }

  AddRouteView(configureOptions: (opts: RouteModels.ViewOptions) => void) {
    configureOptions(this.route.view);
  }

  Build(): RouteModels.Definition {
    return this.route;
  }

  static define(
    name: string,
    configure: (builder: RouteBuilder) => void
  ): RouteModels.Definition {
    let builder = new RouteBuilder(name);
    configure(builder);
    return builder.Build();
  }
}
