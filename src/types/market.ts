import { IMetafield } from "./metafield";

export interface IMarket {
  handle: string;
  id: string;
  metafields: IMetafield[];
}
