import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomRouter } from './routes';

const App = () => (
    <CustomRouter />
)

ReactDOM.render(<App />, document.getElementById('app'));



//import * as React from 'react';
//import { render } from 'react-dom';
//import { browserHistory, Router, Route, IndexRoute } from 'react-router'
//import { Home } from './Components/Home';
//import { Projects } from './Components/Projects';
//import { Gallery } from './Components/Gallery';


//render(
    
//    , document.getElementById('app'))