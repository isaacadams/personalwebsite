import {BlogPost} from './useBlogPosts';
import {Repository} from './Repository';
import '@isaacadams/extensions';

export class BlogPostRepository extends Repository<BlogPost> {
  constructor() {
    super('posts', [
      (data) => {
        if (!stringIsValid(data?.body))
          return Promise.reject(
            `attempted to submit a post without a body:\n${JSON.stringify(
              data,
              null,
              2
            )}`
          );
        if (!stringIsValid(data?.title))
          return Promise.reject(
            `attempted to submit a post without a title:\n${JSON.stringify(
              data,
              null,
              2
            )}`
          );

        return Promise.resolve();
      },
    ]);
  }
}

let stringIsValid = (s: string) => s && !s.isNullOrWhitespace();
