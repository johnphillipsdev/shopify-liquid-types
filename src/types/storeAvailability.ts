import { ILocation } from "./location";

export interface IStoreAvailability {
  available: boolean;
  location: ILocation;
  pick_up_enabled: boolean;
  pick_up_time: string;
}
