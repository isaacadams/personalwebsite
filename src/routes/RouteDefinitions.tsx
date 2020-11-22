import {RouteBuilder} from './RouteBuilder';
import {RouteModels} from './RouteModels';
import {Landing} from '../Components/Landing';
import {Calculator} from '../Components/Calculator';
import {ResumePage} from '../Components/Resume';
import SignInPage from '../firebase/SignInPage';
import Blog from '../Components/Blog/Blog';
import {TestingSuite} from '../Components/TestingSuite';
import meta from '../meta';
import * as Icon from 'grommet-icons';

class RouteConfiguration {
  Landing: RouteModels.Definition;
  BibleStudy: RouteModels.Definition;
  Calculator: RouteModels.Definition;
  Resume: RouteModels.Definition;
  SignIn: RouteModels.Definition;
  Blog: RouteModels.Definition;
  TestingSuite: RouteModels.Definition;
  private _configArray: RouteModels.Definition[];

  constructor() {
    this.Landing = RouteBuilder.define('home', (o) => {
      o.AddRouteConfig((props) => {
        props.path = '/';
        props.component = Landing;
        props.exact = true;
      });

      o.AddRouteView((props) => {
        props.icon = Icon.Home;
      });
    });

    this.Calculator = RouteBuilder.define('calculator', (o) => {
      o.AddRouteConfig((props) => {
        props.path = '/calculator';
        props.component = Calculator;
      });

      o.AddRouteView((props) => {
        props.icon = Icon.Calculator;
      });
    });

    this.Resume = RouteBuilder.define('resume', (o) => {
      o.AddRouteConfig((props) => {
        props.path = '/resume';
        props.component = ResumePage;
      });

      o.AddRouteView((props) => {
        props.icon = Icon.Article;
      });
    });

    this.Blog = RouteBuilder.define('blog', (o) => {
      o.AddRouteConfig((props) => {
        props.path = '/blog';
        props.component = Blog;
      });

      o.AddRouteView((props) => {
        props.icon = Icon.Blog;
      });
    });

    this.SignIn = RouteBuilder.define('signin', (o) => {
      o.AddRouteConfig((props) => {
        props.path = '/signin';
        props.component = SignInPage;
      });

      o.AddRouteView((props) => {
        props.icon = Icon.User;
      });
    });

    this.TestingSuite = RouteBuilder.define('test', (o) => {
      o.AddRouteConfig((props) => {
        props.path = '/test';
        props.component = TestingSuite;
      });

      o.AddRouteView((props) => {
        props.icon = Icon.Test;
      });
    });

    this._configArray = Object.keys(this)
      .map((k) => this[k])
      .filter((route) => this.canShowInProduction(route));
  }

  GetAllRoutes(): RouteModels.Definition[] {
    return this._configArray;
  }

  GetNavbarRoutes(): RouteModels.Definition[] {
    return [this.Landing, this.Calculator, this.Resume, this.TestingSuite];
  }

  canShowInProduction(route: RouteModels.Definition) {
    if (meta.isDevelopment) return true;

    return ![
      this.TestingSuite,
      this.Blog,
      this.Calculator,
      this.SignIn,
    ].includes(route);
  }
}

const RouteDefinitions = new RouteConfiguration();
export default RouteDefinitions;
