import { TaxRegion } from "./TaxRegion";
export declare class TaxProvider {
    id: string;
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    taxRegions: TaxRegion[];
}
