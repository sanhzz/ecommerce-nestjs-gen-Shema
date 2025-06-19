import { PromotionApplicationMethod } from "./PromotionApplicationMethod";
import { Promotion } from "./Promotion";
import { PromotionRuleValue } from "./PromotionRuleValue";
export declare class PromotionRule {
    id: string;
    description: string | null;
    attribute: string;
    operator: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    promotionApplicationMethods: PromotionApplicationMethod[];
    promotionApplicationMethods2: PromotionApplicationMethod[];
    promotions: Promotion[];
    promotionRuleValues: PromotionRuleValue[];
}
