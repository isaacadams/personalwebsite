import * as React from 'react';
import BlogPostRepository from '../../firebase/BlogPost';
import {Button, TextArea} from 'grommet';

export function AddBlogPost({
  user,
  refreshPosts,
}: {
  user: firebase.User;
  refreshPosts: () => void;
}) {
  let [content, setContent] = React.useState('');
  let blogPostRepo = new BlogPostRepository();
  return (
    <div className="row">
      <div className="col-12 d-flex flex-column">
        <TextArea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <div className="pt-3 d-flex justify-content-end">
          <Button primary label="Submit" onClick={onAdd} />
        </div>
      </div>
    </div>
  );
  function onAdd(e) {
    blogPostRepo
      .writeNewPost({
        uid: user.uid,
        author: user.displayName,
        title: 'testing',
        body: content,
      })
      .finally(refreshPosts);
    setContent('');
  }
}
