import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomRouter } from './routes';



const App = () => (
    <CustomRouter />
)

ReactDOM.render(<App />, document.getElementById('app'));
