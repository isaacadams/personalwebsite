import * as React from 'react';
import {Box, Button, Heading, Markdown} from 'grommet';
import {FormPrevious} from 'grommet-icons';
import {useHistory, useParams} from 'react-router-dom';
import {useDatabase} from '../../firebase/useDatabase';
import Loader from '../Shared/Loader';
import {BlogPost} from '../../firebase/BlogPostRepository';

export function BlogPostView(props) {
  let {postId} = useParams();
  let {data, error, loading} = useDatabase<BlogPost>({
    table: `posts/${postId}`,
  });
  let {goBack} = useHistory();

  if (loading || !data) return <Loader />;

  return (
    <>
      <Box fill={'horizontal'} align="start">
        <Button onClick={goBack} label="Back" icon={<FormPrevious />} />
      </Box>
      <Box>
        <Heading size={'2'}>{data.title}</Heading>
        <Markdown>{data.body}</Markdown>
      </Box>
    </>
  );
}
