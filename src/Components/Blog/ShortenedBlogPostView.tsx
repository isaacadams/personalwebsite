import * as React from 'react';
import {IBlogPostWithKey} from '../../firebase/useBlogPosts';
import {Button, Heading, Markdown} from 'grommet';
import {useHistory} from 'react-router-dom';
import {useAuthHook} from '../../firebase/useAuth';
import {FormClose} from 'grommet-icons';

export function ShortenedBlogPostView({primaryKey, post}: IBlogPostWithKey) {
  let {title, body, author, uid} = post;
  let history = useHistory();
  let {user} = useAuthHook();
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Heading size={'3'}>{title}</Heading>
      {!!user && user.uid === uid && (
        <Button label={'Delete'} icon={<FormClose />} />
      )}
      <Markdown>{body}</Markdown>
      <Button
        label={'Continue Reading...'}
        onClick={() => {
          history.push(`blog/${primaryKey}`);
        }}
      />
    </div>
  );
}
