import * as React from 'react';
import {Resume} from '@isaacadams/resume';
import {Box} from 'grommet';
import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  #my-resume .content {
    width: 660pt;
  }
`;

export function ResumePage(props) {
  return (
    <Box fill="horizontal" responsive>
      <ResumeWrapper>
        <Resume />
      </ResumeWrapper>
    </Box>
  );
}
