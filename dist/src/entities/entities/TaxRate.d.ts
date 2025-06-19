import { TaxRegion } from "./TaxRegion";
import { TaxRateRule } from "./TaxRateRule";
export declare class TaxRate {
    id: string;
    rate: number | null;
    code: string;
    name: string;
    isDefault: boolean;
    isCombinable: boolean;
    taxRegionId: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string | null;
    deletedAt: Date | null;
    taxRegion: TaxRegion;
    taxRateRules: TaxRateRule[];
}
