import { PromotionRule } from "./PromotionRule";
import { Promotion } from "./Promotion";
export declare class PromotionApplicationMethod {
    id: string;
    value: string | null;
    rawValue: object | null;
    maxQuantity: number | null;
    applyToQuantity: number | null;
    buyRulesMinQuantity: number | null;
    type: string;
    targetType: string;
    allocation: string | null;
    promotionId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    currencyCode: string | null;
    promotionRules: PromotionRule[];
    promotionRules2: PromotionRule[];
    promotion: Promotion;
}
