import { ICountry } from "./country";
import { IMarket } from "./market";
import { IShopLocale } from "./shopLocale";

export interface ILocalization {
  available_countries: ICountry[];
  available_languages: IShopLocale[];
  country: ICountry;
  language: IShopLocale;
  market: IMarket;
}
