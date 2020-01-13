import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import { Main } from './routes/main';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faCheck, faSpinner, faGithub);
dom.watch();

const render = () => {
    console.log('hot reloading...');
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );
};
{/* <AppContainer>
        <Main />
    </AppContainer>, */}
render();




// Hot Module Replacement APIs
/* if (module.hot) {
  //module.hot.accept('./routes/main', render);
  module.hot.accept();
} */

/* import { hot } from 'react-hot-loader';

declare const module: any;
export default hot(module)(Main); */
