import {Box} from 'grommet';
import * as React from 'react';
import {IBlogPostWithKey, useBlogPosts} from '../../firebase/useBlogPosts';
import Loader from '../Shared/Loader';
import {ShortenedBlogPostView} from './ShortenedBlogPostView';

interface IProps {
  posts: IBlogPostWithKey[];
}

export function BlogFeed(props) {
  let {data, loading, error} = useBlogPosts();
  if (!data || data.length < 1) return <Loader />;
  return (
    <Box>
      {data.map((p, i) => (
        <ShortenedBlogPostView {...p} key={i} />
      ))}
    </Box>
  );
}
