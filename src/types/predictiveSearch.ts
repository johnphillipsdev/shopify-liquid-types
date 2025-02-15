import { IPredictiveSearchResources } from "./predictiveSearchResources";

export interface IPredictiveSearch {
  performed: boolean;
  resources: IPredictiveSearchResources;
  terms: string;
  types: string[];
}
