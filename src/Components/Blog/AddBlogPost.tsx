import * as React from 'react';
import {Button, TextArea} from 'grommet';
import { BlogPostRepository } from '../../firebase/BlogPostRepository';

export function AddBlogPost({
  user,
  refreshPosts,
}: {
  user: firebase.default.User;
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
      .create({
        uid: user.uid,
        author: user.displayName,
        title: 'testing',
        body: content,
      })
      .catch(console.error)
      .finally(refreshPosts);
    setContent('');
  }
}
