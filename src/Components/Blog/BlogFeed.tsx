import * as React from 'react';
import { IBlogPostWithKey } from '../../firebase/useBlogPosts';
import { ShowLoading } from '../Shared/ShowLoading';
import { ShortenedBlogPostView } from './ShortenedBlogPostView';

export function BlogFeed({ posts }: {
    posts: IBlogPostWithKey[];
}) {
    if (!posts || posts.length < 1)
        return <ShowLoading />;
    return (<div>
        {posts.map((p, i) => <div className="pt-4" key={i}>
            <ShortenedBlogPostView {...p} />
        </div>)}
    </div>);
}
