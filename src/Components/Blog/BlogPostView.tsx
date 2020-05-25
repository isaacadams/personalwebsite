import * as React from 'react';
import BlogPostRepository, { BlogPost } from '../../firebase/BlogPost';
import { ShowLoading } from '../Shared/ShowLoading';
import { Markdown } from 'grommet';
import { useParams } from 'react-router-dom';

export function BlogPostView(props) {
    let { postId } = useParams();
    let [post, setPost] = React.useState<BlogPost>(null);
    React.useEffect(() => {
        new BlogPostRepository()
            .readPost(postId)
            .then(r => setPost(r.post));
    });
    if (!post)
        return <ShowLoading />;
    return (<div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{post.title}</h3>
        <Markdown>{post.body}</Markdown>
    </div>);
}
