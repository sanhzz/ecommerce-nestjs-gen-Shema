import { Price } from "./Price";
export declare class PriceSet {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    prices: Price[];
}
