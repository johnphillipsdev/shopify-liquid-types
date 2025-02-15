import { IFilterValue } from "./filterValue";

export interface IFilter {
  active_values: IFilterValue[];
  false_value: IFilterValue;
  inactive_values: IFilterValue[];
  label: string;
  max_value: IFilterValue;
  min_value: IFilterValue;
  operator: string;
  param_name: string;
  presentation: string;
  range_max: number;
  true_value: IFilterValue;
  type: string;
  url_to_remove: string;
  values: IFilterValue[];
}
