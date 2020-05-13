import { RouteBuilder } from './RouteBuilder';
import { Home } from '../Components/Home';
import { FailLog } from '../Components/FailLog';
import { Projects } from '../Components/Projects';
import { Gallery } from '../Components/Gallery';
import { RouteModels } from './RouteModels';
import { Landing } from '../Components/Landing';
import { BibleStudy } from '../Components/BibleStudy';
import { Calculator } from '../Components/Calculator';
//import { ToolInfo } from "../Components/ToolInfo";
import {Resume} from '../Components/Resume';

class RouteConfiguration {
    /* Home: RouteModels.Definition;
    FailLog: RouteModels.Definition;
    Projects: RouteModels.Definition;
    Gallery: RouteModels.Definition; */
    Landing: RouteModels.Definition;
    BibleStudy: RouteModels.Definition;
    Calculator: RouteModels.Definition;
    Resume: RouteModels.Definition;
    //ToolInfo: RouteModels.Definition;
    private _configArray: RouteModels.Definition[];

    constructor() {
        /* this.Home = RouteBuilder.define("Home", "/", Home, o => {
            o.exact = true;
        });
        this.Projects = RouteBuilder.define("Projects", "/projects", Projects);
        this.Gallery = RouteBuilder.define("Gallery", "/gallery", Gallery); */
        /* this.FailLog = RouteBuilder.define("fail.log", "/fails", FailLog); */

        this.Landing = RouteBuilder.define("Landing", "/", Landing,
        o => {
            o.exact = true;
        });

        this.BibleStudy = RouteBuilder.define("biblestudy", "/study", BibleStudy);
        this.Calculator = RouteBuilder.define("calculator", "/calculator", Calculator);
        this.Resume = RouteBuilder.define("resume", "/resume", Resume);
        //this.ToolInfo = RouteBuilder.define("toolinfo", "/toolinfo", ToolInfo);

        this._configArray = Object.keys(this).map(k => this[k]);
    }

    asArray(): RouteModels.Definition[] {
        return this._configArray;    
    }
}

const routeDefinitions = new RouteConfiguration();

export { routeDefinitions };