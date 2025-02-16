import { IProductOptionValue } from "./productOptionValue";

export interface IProductOption {
  name: string;
  position: number;
  selected_value: string;
  values: string[];
}
