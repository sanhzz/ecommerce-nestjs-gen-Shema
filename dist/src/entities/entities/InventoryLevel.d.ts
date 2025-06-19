import { InventoryItem } from "./InventoryItem";
export declare class InventoryLevel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    inventoryItemId: string;
    locationId: string;
    stockedQuantity: string;
    reservedQuantity: string;
    incomingQuantity: string;
    metadata: object | null;
    rawStockedQuantity: object | null;
    rawReservedQuantity: object | null;
    rawIncomingQuantity: object | null;
    inventoryItem: InventoryItem;
}
