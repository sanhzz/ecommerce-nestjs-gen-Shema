import { InventoryLevel } from "./InventoryLevel";
import { ReservationItem } from "./ReservationItem";
export declare class InventoryItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    sku: string | null;
    originCountry: string | null;
    hsCode: string | null;
    midCode: string | null;
    material: string | null;
    weight: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    requiresShipping: boolean;
    description: string | null;
    title: string | null;
    thumbnail: string | null;
    metadata: object | null;
    inventoryLevels: InventoryLevel[];
    reservationItems: ReservationItem[];
}
