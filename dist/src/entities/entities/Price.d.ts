import { PriceList } from "./PriceList";
import { PriceSet } from "./PriceSet";
import { PriceRule } from "./PriceRule";
export declare class Price {
    id: string;
    title: string | null;
    priceSetId: string;
    currencyCode: string;
    rawAmount: object;
    rulesCount: number | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    priceListId: string | null;
    amount: string;
    minQuantity: number | null;
    maxQuantity: number | null;
    priceList: PriceList;
    priceSet: PriceSet;
    priceRules: PriceRule[];
}
