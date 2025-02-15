import { ICompany } from "./company";
import { ICompanyAddress } from "./companyAddress";
import { IMetafield } from "./metafield";

export interface ICompanyLocation {
  company: ICompany;
  current: boolean;
  external_id: string;
  id: number;
  metafields: IMetafield[];
  name: string;
  shipping_address: ICompanyAddress;
  tax_registration_id: number;
  url_to_set_as_current: string;
}
