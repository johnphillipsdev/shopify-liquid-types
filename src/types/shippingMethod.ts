import { IDiscountAllocation } from "./discountAllocation";
import { ITaxLine } from "./taxLine";

export interface IShippingMethod {
  discount_allocations: IDiscountAllocation[];
  handle: string;
  id: string;
  original_price: number;
  price_with_discounts: number;
  tax_lines: ITaxLine[];
  title: string;
}
