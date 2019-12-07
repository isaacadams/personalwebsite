import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './routes/main';

const App = () => (
    <div>
        <Main />
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
