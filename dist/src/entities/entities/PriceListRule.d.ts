import { PriceList } from "./PriceList";
export declare class PriceListRule {
    id: string;
    priceListId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    value: object | null;
    attribute: string;
    priceList: PriceList;
}
