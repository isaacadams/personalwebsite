import * as React from 'react';
import { ShowLoading } from '../Shared/ShowLoading';
import { Markdown } from 'grommet';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../../firebase/useBlogPosts';
import { useDatabase } from "../../firebase/useDatabase";

export function BlogPostView(props) {
    let { postId } = useParams();
    let { data, error, loading } = useDatabase<BlogPost>({table: `posts/${postId}`});
    if(loading || !data) return <ShowLoading />;
    let post = data;

    return (<div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{post.title}</h3>
        <Markdown>{post.body}</Markdown>
    </div>);
}
