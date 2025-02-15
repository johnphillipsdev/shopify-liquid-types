import { ISellingPlan } from "./sellingPlan";
import { ISellingPlanGroupOption } from "./sellingPlanGroupOption";

export interface ISellingPlanGroup {
  app_id: string;
  id: number;
  name: string;
  options: ISellingPlanGroupOption[];
  selling_plan_selected: boolean;
  selling_plans: ISellingPlan[];
}
