import { RouteBuilder } from './RouteBuilder';
import { RouteModels } from './RouteModels';
import { Landing } from '../Components/Landing';
import { BibleStudy } from '../Components/BibleStudy';
import { Calculator } from '../Components/Calculator';
import {ResumePage} from '../Components/Resume';
/* import SignInPage from '../firebase/SignInPage'; */


class RouteConfiguration {
    Landing: RouteModels.Definition;
    BibleStudy: RouteModels.Definition;
    Calculator: RouteModels.Definition;
    Resume: RouteModels.Definition;
    SignIn: RouteModels.Definition;
    private _configArray: RouteModels.Definition[];

    constructor() {

        this.Landing = RouteBuilder.define("home", "/", Landing, o => {
            o.exact = true;
        });

        this.BibleStudy = RouteBuilder.define("biblestudy", "/study", BibleStudy);
        this.Calculator = RouteBuilder.define("calculator", "/calculator", Calculator);
        this.Resume = RouteBuilder.define("resume", "/resume", ResumePage);
        /* this.SignIn = RouteBuilder.define("signin", "/signin", SignInPage); */

        this._configArray = Object.keys(this).map(k => this[k]);
    }

    asArray(): RouteModels.Definition[] {
        return this._configArray;    
    }
}

const routeDefinitions = new RouteConfiguration();

export { routeDefinitions };