import { IDiscountApplication } from "./discountApplication";
import { ILineItem } from "./lineItem";

export interface ICart {
  attributes: any;
  cart_level_discount_applications: IDiscountApplication[];
  checkout_charge_amount: number;
  currency: string;
  discount_applications: IDiscountApplication[];
  duties_included: boolean;
  empty: boolean;
  item_count: number;
  items: ILineItem[];
  items_subtotal_price: number;
  note: string;
  original_total_price: number;
  requires_shipping: boolean;
  taxes_included: boolean;
  total_discount: number;
  total_price: number;
  total_weight: number;
}
