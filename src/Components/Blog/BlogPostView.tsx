import * as React from 'react';
import {Box, Button, Heading, Markdown} from 'grommet';
import {FormPrevious} from 'grommet-icons';
import {useHistory, useParams} from 'react-router-dom';
import {BlogPost} from '../../firebase/useBlogPosts';
import {useDatabase} from '../../firebase/useDatabase';
import Loader from '../Shared/Loader';

export function BlogPostView(props) {
  let {postId} = useParams();
  let {data, error, loading} = useDatabase<BlogPost>({
    table: `posts/${postId}`,
  });

  if (loading || !data) return <Loader />;

  let {goBack} = useHistory();

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
