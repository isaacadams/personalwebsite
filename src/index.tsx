import './styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './routes/App';
import './base.scss';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { normalizeColor } from 'grommet/utils';
import { rgba } from 'polished';


ReactDOM.render(
<Grommet full={true} theme={grommet}>
    <App />
</Grommet>, document.getElementById('app'));