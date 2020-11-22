import * as React from 'react';
import {IBlogPostWithKey} from '../../firebase/BlogPost';
import {Button, Markdown} from 'grommet';
import {useHistory} from 'react-router-dom';

export function ShortenedBlogPostView({primaryKey, post}: IBlogPostWithKey) {
  let {title, body, author} = post;
  let history = useHistory();
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3>{title}</h3>
      <Markdown>{body}</Markdown>
      <div>
        <Button
          label={'Continue Reading...'}
          onClick={() => {
            history.push(`blog/${primaryKey}`);
          }}
        />
      </div>
    </div>
  );
}
