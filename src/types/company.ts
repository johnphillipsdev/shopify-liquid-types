import { ICompanyLocation } from "./companyLocation";
import { IMetafield } from "./metafield";

export interface ICompany {
  available_locations: ICompanyLocation[];
  available_locations_count: number;
  external_id: string;
  id: number;
  metafields: IMetafield[];
  name: string;
}
