import { IFilter } from "./filter";
import { IImage } from "./image";
import { IMetafield } from "./metafield";
import { IProduct } from "./product";
import { ISortOption } from "./sortOption";

export interface ICollection {
  all_products_count: number;
  all_tags: string[];
  all_types: string[];
  all_vendors: string[];
  current_type: string;
  current_vendor: string;
  default_sort_by: string;
  description: string;
  featured_image: IImage;
  filters: IFilter[];
  handle: string;
  id: number;
  image: IImage;
  metafields: IMetafield[];
  next_product: IProduct;
  previous_product: IProduct;
  products: IProduct[];
  products_count: number;
  published_at: string;
  sort_by: string;
  sort_options: ISortOption[];
  tags: string[];
  template_suffix: string;
  title: string;
  url: string;
}
