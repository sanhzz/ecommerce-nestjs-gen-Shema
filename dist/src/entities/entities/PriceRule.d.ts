import { Price } from "./Price";
export declare class PriceRule {
    id: string;
    value: string;
    priority: number;
    priceId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    attribute: string;
    operator: string;
    price: Price;
}
