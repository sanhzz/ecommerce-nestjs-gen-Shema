import { OrderLineItem } from "./OrderLineItem";
export declare class OrderLineItemTaxLine {
    id: string;
    description: string | null;
    taxRateId: string | null;
    code: string;
    rate: string;
    rawRate: object;
    providerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    itemId: string;
    deletedAt: Date | null;
    item: OrderLineItem;
}
