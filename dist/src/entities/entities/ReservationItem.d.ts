import { InventoryItem } from "./InventoryItem";
export declare class ReservationItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    lineItemId: string | null;
    locationId: string;
    quantity: string;
    externalId: string | null;
    description: string | null;
    createdBy: string | null;
    metadata: object | null;
    inventoryItemId: string;
    allowBackorder: boolean | null;
    rawQuantity: object | null;
    inventoryItem: InventoryItem;
}
