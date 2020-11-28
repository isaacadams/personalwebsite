import {Box} from 'grommet';
import * as React from 'react';
import {IBlogPostWithKey} from '../../firebase/useBlogPosts';
import {ShowLoading} from '../Shared/ShowLoading';
import {ShortenedBlogPostView} from './ShortenedBlogPostView';

interface IProps {
  posts: IBlogPostWithKey[];
}

export function BlogFeed({posts}: IProps) {
  if (!posts || posts.length < 1) return <ShowLoading />;
  return (
    <Box>
      {posts.map((p, i) => (
        <ShortenedBlogPostView {...p} key={i} />
      ))}
    </Box>
  );
}
