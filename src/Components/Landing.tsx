import {Gallery} from './Gallery';
import {Projects} from './Projects';
import {Home} from './Home';
import * as React from 'react';
import {LandingPageContext} from '../routes/App';
import {Box, Grid} from 'grommet';

export function Landing(props) {
  let data = React.useContext(LandingPageContext);

  return (
    <Grid gap="large">
      <Box align="center">
        <Home data={data['home']} />
      </Box>
      <Box align="center">
        <Projects />
      </Box>
      <Box align="center">
        <Gallery data={data['gallery']} />
      </Box>
    </Grid>
  );
}
