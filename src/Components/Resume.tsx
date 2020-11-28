import * as React from 'react';
import {Resume} from '@isaacadams/resume';
import {Box} from 'grommet';

export function ResumePage(props) {
  return (
    <Box fill="horizontal" responsive>
      <Resume />
    </Box>
  );
}
