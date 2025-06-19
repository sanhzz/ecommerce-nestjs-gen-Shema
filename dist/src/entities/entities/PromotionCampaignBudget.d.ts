import { PromotionCampaign } from "./PromotionCampaign";
export declare class PromotionCampaignBudget {
    id: string;
    type: string;
    campaignId: string;
    limit: string | null;
    rawLimit: object | null;
    used: string;
    rawUsed: object;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    currencyCode: string | null;
    campaign: PromotionCampaign;
}
