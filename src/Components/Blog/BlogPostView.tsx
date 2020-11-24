import * as React from 'react';
import {ShowLoading} from '../Shared/ShowLoading';
import {Box, Button, Heading, Markdown} from 'grommet';
import {FormPrevious} from 'grommet-icons'
import {useHistory, useParams} from 'react-router-dom';
import {BlogPost} from '../../firebase/useBlogPosts';
import {useDatabase} from '../../firebase/useDatabase';

export function BlogPostView(props) {
  let {postId} = useParams();
  let {data, error, loading} = useDatabase<BlogPost>({
    table: `posts/${postId}`,
  });
  if (loading || !data) return <ShowLoading />;
  let post = data;

  let {goBack} = useHistory();

  return (
    <>
      <Box fill align='start'>
        <Button onClick={goBack} label='Back' icon={<FormPrevious />} />
      </Box>
      <Box>
        <Heading size={'2'}>{post.title}</Heading>
        <Markdown>{post.body}</Markdown>
      </Box>
    </>
  );
}
