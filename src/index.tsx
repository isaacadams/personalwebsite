import './styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './routes/main';

const render = () => {
    console.log('hot reloading...');
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );
};

render();