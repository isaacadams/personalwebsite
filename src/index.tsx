import './styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './routes/Main';
import './base.scss';
ReactDOM.render(<div className="bootstrap-styles">
    <Main />
</div>, document.getElementById('app'));