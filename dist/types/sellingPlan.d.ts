import { ISellingPlanCheckoutCharge } from "./sellingPlanCheckoutCharge";
import { ISellingPlanOption } from "./sellingPlanOption";
import { ISellingPlanPriceAdjustment } from "./sellingPlanPriceAdjustment";
export interface ISellingPlan {
    checkout_charge: ISellingPlanCheckoutCharge;
    description: string;
    group_id: string;
    id: number;
    name: string;
    options: ISellingPlanOption[];
    price_adjustments: ISellingPlanPriceAdjustment[];
    recurring_deliveries: boolean;
    selected: boolean;
}
//# sourceMappingURL=sellingPlan.d.ts.map