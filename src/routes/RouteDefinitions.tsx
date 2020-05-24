import { RouteBuilder } from './RouteBuilder';
import { RouteModels } from './RouteModels';
import { Landing } from '../Components/Landing';
import { Calculator } from '../Components/Calculator';
import {ResumePage} from '../Components/Resume';
import SignInPage from '../firebase/SignInPage';
import Blog from '../Components/Blog';
import TestingSuite from '../Components/TestingSuite';
import meta from '../meta';

class RouteConfiguration {
    Landing: RouteModels.Definition;
    BibleStudy: RouteModels.Definition;
    Calculator: RouteModels.Definition;
    Resume: RouteModels.Definition;
    SignIn: RouteModels.Definition;
    Blog: RouteModels.Definition;
    private _configArray: RouteModels.Definition[];
    TestingSuite: RouteModels.Definition;

    constructor() {
        this.Landing = RouteBuilder.define("home", "/", Landing, o => {
            o.exact = true;
        });

        this.Calculator = RouteBuilder.define("calculator", "/calculator", Calculator);
        this.Resume = RouteBuilder.define("resume", "/resume", ResumePage);
        this.Blog = RouteBuilder.define("blog", "/blog", Blog);
        this.SignIn = RouteBuilder.define("signin", "/signin", SignInPage);
        this.TestingSuite = RouteBuilder.define("test", "/test", TestingSuite);

        this._configArray = Object.keys(this).map(k => this[k]).filter(route => this.canShowInProduction(route));
    }

    GetAllRoutes(): RouteModels.Definition[] {
        return this._configArray;    
    }

    GetNavbarRoutes(): RouteModels.Definition[] {
        return [this.Landing, this.Calculator, this.Resume, this.TestingSuite];
    }

    canShowInProduction(route: RouteModels.Definition) {
        if(meta.isDevelopment) return true;

        return ![this.TestingSuite, this.Blog, this.Calculator, this.SignIn].includes(route);
    }
}

const RouteDefinitions = new RouteConfiguration();
export default RouteDefinitions;