import { ISwatch } from "./swatch";
import { IVariant } from "./variant";

export interface IProductOptionValue {
  available: boolean;
  id: number;
  name: string;
  product_url: string;
  selected: boolean;
  swatch: ISwatch;
  variant: IVariant;
}
