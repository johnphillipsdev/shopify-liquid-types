import { IAddress } from "./address";
import { IMetafield } from "./metafield";
export interface ILocation {
    address: IAddress;
    id: number;
    latitude: number;
    longitude: number;
    metafields: IMetafield[];
    name: string;
}
//# sourceMappingURL=location.d.ts.map