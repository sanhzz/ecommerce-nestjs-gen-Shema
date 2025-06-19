import { Price } from "./Price";
import { PriceListRule } from "./PriceListRule";
export declare class PriceList {
    id: string;
    status: string;
    startsAt: Date | null;
    endsAt: Date | null;
    rulesCount: number | null;
    title: string;
    description: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    prices: Price[];
    priceListRules: PriceListRule[];
}
