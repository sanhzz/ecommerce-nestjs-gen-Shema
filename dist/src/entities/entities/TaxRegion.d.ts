import { TaxRate } from "./TaxRate";
import { TaxProvider } from "./TaxProvider";
export declare class TaxRegion {
    id: string;
    providerId: string | null;
    countryCode: string;
    provinceCode: string | null;
    parentId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string | null;
    deletedAt: Date | null;
    taxRate: TaxRate;
    parent: TaxRegion;
    taxRegions: TaxRegion[];
    provider: TaxProvider;
}
