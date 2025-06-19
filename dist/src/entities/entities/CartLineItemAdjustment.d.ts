import { CartLineItem } from "./CartLineItem";
export declare class CartLineItemAdjustment {
    id: string;
    description: string | null;
    promotionId: string | null;
    code: string | null;
    amount: string;
    rawAmount: object;
    providerId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    itemId: string | null;
    item: CartLineItem;
}
