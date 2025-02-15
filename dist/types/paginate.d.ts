import { IPart } from "./part";
export interface IPaginate {
    current_offset: number;
    current_page: number;
    items: number;
    next: IPart;
    page_param: string;
    page_size: number;
    pages: number;
    parts: IPart[];
    previous: IPart;
}
//# sourceMappingURL=paginate.d.ts.map