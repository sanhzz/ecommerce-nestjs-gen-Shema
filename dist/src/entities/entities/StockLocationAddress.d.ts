import { StockLocation } from "./StockLocation";
export declare class StockLocationAddress {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    address_1: string;
    address_2: string | null;
    company: string | null;
    city: string | null;
    countryCode: string;
    phone: string | null;
    province: string | null;
    postalCode: string | null;
    metadata: object | null;
    stockLocation: StockLocation;
}
