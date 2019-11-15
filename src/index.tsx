import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomRouter } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router>
        <CustomRouter />
    </Router>
)

ReactDOM.render(<App />, document.getElementById('app'));
