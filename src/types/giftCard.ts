import { ICustomer } from "./customer";
import { IProduct } from "./product";
import { IRecipient } from "./recipient";

export interface IGiftCard {
  balance: number;
  code: string;
  currency: string;
  customer: ICustomer;
  enabled: boolean;
  expired: boolean;
  expires_on: string;
  initial_value: number;
  last_four_characters: string;
  message: string;
  pass_url: string;
  product: IProduct;
  properties: any;
  qr_identifier: string;
  recipient: IRecipient;
  send_on: string;
  template_suffix: string;
  url: string;
}
