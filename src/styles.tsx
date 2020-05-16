//import 'bootstrap/dist/css/bootstrap.min.css';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faSpinner, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faCheck, faPlus, faSpinner, faGithub, faGoogle);
dom.watch();