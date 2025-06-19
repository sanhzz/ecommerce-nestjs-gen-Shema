import { StockLocationAddress } from "./StockLocationAddress";
export declare class StockLocation {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    name: string;
    addressId: string | null;
    metadata: object | null;
    address: StockLocationAddress;
}
