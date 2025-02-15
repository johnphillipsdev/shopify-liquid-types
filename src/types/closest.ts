import { IArticle } from "./article";
import { IBlog } from "./blog";
import { ICollection } from "./collection";
import { IMetaobject } from "./metaObject";
import { IPage } from "./page";
import { IProduct } from "./product";

export interface IClosest {
  article: IArticle;
  blog: IBlog;
  collection: ICollection;
  metaobject: IMetaobject;
  page: IPage;
  product: IProduct;
}
