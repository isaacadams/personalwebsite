import * as React from 'react';
import meta from './meta';
import {Footer, Anchor, Text} from 'grommet';
import {Github} from 'grommet-icons';

export function DisplayFooter() {
  return (
    <Footer background="brand" pad="medium">
      <Text>{meta.owner}</Text>
      <Text>{meta.version}</Text>
      <Anchor
        icon={<Github />}
        label="source"
        href="https://github.com/isaacadams/personalwebsite/tree/master"
      />
    </Footer>
  );
}
