export interface ISellingPlanPriceAdjustment {
  order_count: number;
  position: number;
  value: number;
  value_type: "fixed" | "percentage" | "price";
}
