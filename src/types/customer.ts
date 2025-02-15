import { IAddress } from "./address";
import { ICompany } from "./company";
import { ICompanyLocation } from "./companyLocation";
import { ICustomerPaymentMethod } from "./customerPaymentMethod";
import { IOrder } from "./order";

export interface ICustomer {
  accepts_marketing: boolean;
  addresses: IAddress[];
  addresses_count: number;
  b2b: boolean;
  company_available_locations: ICompanyLocation[];
  company_available_locations_count: number;
  current_company: ICompany;
  current_location: ICompanyLocation;
  default_address: IAddress;
  email: string;
  first_name: string;
  has_account: boolean;
  has_avatar: boolean;
  id: number;
  last_name: string;
  last_order: IOrder;
  name: string;
  orders: IOrder[];
  orders_count: number;
  payment_methods: ICustomerPaymentMethod[];
  phone: string;
  tags: string[];
  tax_exempt: boolean;
  total_spent: number;
}
