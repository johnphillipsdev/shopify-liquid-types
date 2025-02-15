import { IComment } from "./comment";
import { IImage } from "./image";
import { IUser } from "./user";

export interface IArticle {
  author: string;
  comment_post_url: string;
  comments: IComment[];
  comments_count: number;
  comments_enabled: boolean;
  content: string;
  created_at: string;
  excerpt: string;
  excerpt_or_content: string;
  handle: string;
  id: string;
  image: IImage;
  metafields: any;
  moderated: boolean;
  published_at: string;
  tags: string[];
  template_suffix: string;
  title: string;
  updated_at: string;
  url: string;
  user: IUser;
}
