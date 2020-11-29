import {BlogPostRepository} from './BlogPostRepository';
import {IDatabaseReturn, useDatabase} from './useDatabase';
import {ITableService, useDatabaseWithService} from './useDatabaseWithService';

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

/* export function useBlogPosts(): IDatabaseReturn<ITableService<BlogPost>[]> {
  let repo = new BlogPostRepository();
  return useDatabase<ITableService<BlogPost>[]>({
    table: `posts`,
    transform: (d) =>
      Object.keys(d).map((key) => ({
        key,
        data: d[key] as BlogPost,
        update: (data: BlogPost) => repo.update(key, data),
        remove: () => repo.remove(key),
      })),
  });
} */

export function useBlogPostsWithService(): IDatabaseReturn<
  ITableService<BlogPost>[]
> {
  return useDatabaseWithService<BlogPost>(new BlogPostRepository());
}
