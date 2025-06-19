import { PromotionRule } from "./PromotionRule";
export declare class PromotionRuleValue {
    id: string;
    promotionRuleId: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    promotionRule: PromotionRule;
}
