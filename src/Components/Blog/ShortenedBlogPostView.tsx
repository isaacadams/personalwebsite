import * as React from 'react';
import {
  Box,
  Text,
  Button,
  Grid,
  Heading,
  Markdown,
  Paragraph,
  Stack,
  Anchor,
} from 'grommet';
import {useHistory} from 'react-router-dom';
import {useAuthHook} from '../../firebase/useAuth';
import {FormClose} from 'grommet-icons';
import {ITableService} from '../../firebase/useDatabaseWithService';
import {BlogPost} from '../../firebase/BlogPostRepository';

export function ShortenedBlogPostView({
  data,
  remove,
  update,
  primaryKey,
}: ITableService<BlogPost>) {
  let {title, body, author, uid} = data;
  let history = useHistory();
  let {user} = useAuthHook();
  return (
    <Box direction="column" fill>
      <Heading size={'3'}>{title}</Heading>
      {!!user && user.uid === uid && (
        <Button
          label={'Delete'}
          icon={<FormClose />}
          onClick={(e) => {
            remove();
          }}
        />
      )}
      <Paragraph>
        {body}
        <Anchor
          onClick={() => {
            history.push(`blog/${primaryKey}`);
          }}
        >
          &nbsp;...&nbsp;Continue Reading
        </Anchor>
      </Paragraph>
    </Box>
  );
}
