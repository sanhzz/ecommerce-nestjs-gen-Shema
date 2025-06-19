import { RegionCountry } from "./RegionCountry";
export declare class Region {
    id: string;
    name: string;
    currencyCode: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    automaticTaxes: boolean;
    regionCountries: RegionCountry[];
}
