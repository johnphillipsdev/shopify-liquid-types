import { ISellingPlan } from "./sellingPlan";
import { ISellingPlanAllocationPriceAdjustment } from "./sellingPlanAllocationPriceAdjustment";
export interface ISellingPlanAllocation {
    checkout_charge_amount: number;
    compare_at_price: number;
    per_delivery_price: number;
    price: number;
    price_adjustments: ISellingPlanAllocationPriceAdjustment[];
    remaining_balance_charge_amount: number;
    selling_plan: ISellingPlan;
    selling_plan_group_id: string;
    unit_price: number;
}
//# sourceMappingURL=sellingPlanAllocation.d.ts.map