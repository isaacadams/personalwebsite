import * as React from 'react';
import {Button, FormField, Grid, Header, TextArea, TextInput} from 'grommet';
import {BlogPostRepository} from '../../firebase/BlogPostRepository';
import {useAuthHook} from '../../firebase/useAuth';

export function AddBlogPost({}) {
  let {user} = useAuthHook();
  let [content, setContent] = React.useState('');
  let blogPostRepo = new BlogPostRepository();
  return (
    <Grid>
      <Header>
        <Button primary label="Submit" onClick={onAdd} />
      </Header>
      <FormField name="name" htmlFor="text-input-id" label="Name">
        <TextInput id="text-input-id" name="name" />
      </FormField>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
    </Grid>
  );
  function onAdd(e) {
    blogPostRepo
      .create({
        uid: user.uid,
        author: user.displayName,
        title: 'testing',
        body: content,
      })
      .catch(console.error);
    setContent('');
  }
}
