import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import meta from './meta';
import {Footer, Anchor, Text} from 'grommet';

export function DisplayFooter() {
  return (
    <Footer background="brand" pad="medium">
      <Text>{meta.owner}</Text>
      <Text>{meta.version}</Text>
      <Anchor
        icon={<FontAwesomeIcon icon={['fab', 'github']} />}
        label="source"
        href="https://github.com/isaacadams/personalwebsite/tree/master"
      />
    </Footer>
  );
}
