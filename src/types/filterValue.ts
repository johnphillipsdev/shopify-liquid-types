import { IImage } from "./image";
import { ISwatch } from "./swatch";

export interface IFilterValue {
  active: boolean;
  count: number;
  image: IImage;
  label: string;
  param_name: string;
  swatch: ISwatch;
  url_to_add: string;
  url_to_remove: string;
  value: string;
}
