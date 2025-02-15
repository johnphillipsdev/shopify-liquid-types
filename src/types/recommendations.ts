import { IProduct } from "./product";

export interface IRecommendations {
  intent: string;
  performed?: boolean;
  products: IProduct[];
  products_count: number;
}
