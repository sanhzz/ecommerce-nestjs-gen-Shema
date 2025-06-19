import { CartLineItem } from "./CartLineItem";
export declare class CartLineItemTaxLine {
    id: string;
    description: string | null;
    taxRateId: string | null;
    code: string;
    rate: number;
    providerId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    itemId: string | null;
    item: CartLineItem;
}
