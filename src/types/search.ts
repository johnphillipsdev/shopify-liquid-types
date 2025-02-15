import { IFilter } from "./filter";
import { ISortOption } from "./sortOption";

export interface ISearch {
  default_sort_by: string;
  filters: IFilter[];
  performed: boolean;
  results: any;
  results_count: number;
  sort_by: string;
  sort_options: ISortOption[];
  terms: string;
  types: string[];
}
