import {Box} from 'grommet';
import * as React from 'react';
import {IBlogPostWithKey} from '../../firebase/useBlogPosts';
import {ShowLoading} from '../Shared/ShowLoading';
import {ShortenedBlogPostView} from './ShortenedBlogPostView';

export function BlogFeed({posts}: {posts: IBlogPostWithKey[]}) {
  if (!posts || posts.length < 1) return <ShowLoading />;
  return (
    <Box fill>
      {posts.map((p, i) => (
        <ShortenedBlogPostView {...p} key={i} />
      ))}
    </Box>
  );
}
