import { Fulfillment } from "./Fulfillment";
export declare class FulfillmentItem {
    id: string;
    title: string;
    sku: string;
    barcode: string;
    quantity: string;
    rawQuantity: object;
    lineItemId: string | null;
    inventoryItemId: string | null;
    fulfillmentId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    fulfillment: Fulfillment;
}
