//import 'bootstrap/dist/css/bootstrap.min.css';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faCheck, faSpinner, faGithub);
dom.watch();