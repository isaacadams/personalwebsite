import {IDatabaseReturn, useDatabase} from './useDatabase';

export class BlogPost {
  author: string;
  uid: string;
  body: string;
  title: string;
}

export interface IBlogPostWithKey {
  primaryKey: string;
  post: BlogPost;
}

export function useBlogPosts(): IDatabaseReturn<IBlogPostWithKey[]> {
  return useDatabase<IBlogPostWithKey[]>({
    table: `posts`,
    transform: (d) =>
      Object.keys(d).map((primaryKey) => ({
        primaryKey,
        post: d[primaryKey],
      })),
  });
}
