import { ILineItem } from "./lineItem";
export interface IFulfillment {
    created_at: string;
    fulfillment_line_items: ILineItem[];
    item_count: number;
    tracking_company: string;
    tracking_number: string;
    tracking_numbers: string[];
    tracking_url: string;
}
//# sourceMappingURL=fulfillment.d.ts.map