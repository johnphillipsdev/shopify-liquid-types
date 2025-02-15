import { IArticle } from "./article";
import { IMetafield } from "./metafield";

export interface IBlog {
  all_tags: string[];
  articles: IArticle[];
  articles_count: number;
  comments_enabled: boolean;
  handle: string;
  id: number;
  metafields: IMetafield[];
  moderated: boolean;
  next_article: IArticle;
  previous_article: IArticle;
  tags: string[];
  template_suffix: string;
  title: string;
  url: string;
}
