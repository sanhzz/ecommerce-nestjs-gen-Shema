import { TaxRate } from "./TaxRate";
export declare class TaxRateRule {
    id: string;
    taxRateId: string;
    referenceId: string;
    reference: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string | null;
    deletedAt: Date | null;
    taxRate: TaxRate;
}
