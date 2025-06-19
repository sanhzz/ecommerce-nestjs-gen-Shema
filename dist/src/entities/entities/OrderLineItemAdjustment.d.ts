import { OrderLineItem } from "./OrderLineItem";
export declare class OrderLineItemAdjustment {
    id: string;
    description: string | null;
    promotionId: string | null;
    code: string | null;
    amount: string;
    rawAmount: object;
    providerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    itemId: string;
    deletedAt: Date | null;
    item: OrderLineItem;
}
