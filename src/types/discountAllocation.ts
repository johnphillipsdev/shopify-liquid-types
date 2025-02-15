import { IDiscountApplication } from "./discountApplication";

export interface IDiscountAllocation {
  amount: number;
  discount_application: IDiscountApplication;
}
