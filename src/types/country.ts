import { ICurrency } from "./currency";
import { IMarket } from "./market";
import { IShopLocale } from "./shopLocale";

export interface ICountry {
  available_languages: IShopLocale[];
  continent: string;
  currency: ICurrency;
  iso_code: string;
  market: IMarket;
  name: string;
  popular: boolean;
  unit_system: string;
}
