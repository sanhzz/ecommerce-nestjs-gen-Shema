import { PromotionCampaign } from "./PromotionCampaign";
import { PromotionApplicationMethod } from "./PromotionApplicationMethod";
import { PromotionRule } from "./PromotionRule";
export declare class Promotion {
    id: string;
    code: string;
    campaignId: string | null;
    isAutomatic: boolean;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    campaign: PromotionCampaign;
    promotionApplicationMethod: PromotionApplicationMethod;
    promotionRules: PromotionRule[];
}
