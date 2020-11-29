import * as React from 'react';
import {Button, Heading, Markdown} from 'grommet';
import {useHistory} from 'react-router-dom';
import {useAuthHook} from '../../firebase/useAuth';
import {FormClose} from 'grommet-icons';
import {ITableService} from '../../firebase/useDatabaseWithService';
import {BlogPost} from '../../firebase/BlogPostRepository';

export function ShortenedBlogPostView({
  data,
  remove,
  update,
  primaryKey,
}: ITableService<BlogPost>) {
  let {title, body, author, uid} = data;
  let history = useHistory();
  let {user} = useAuthHook();
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Heading size={'3'}>{title}</Heading>
      {!!user && user.uid === uid && (
        <Button
          label={'Delete'}
          icon={<FormClose />}
          onClick={(e) => {
            remove();
          }}
        />
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
