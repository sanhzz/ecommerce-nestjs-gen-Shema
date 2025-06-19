import { Promotion } from "./Promotion";
import { PromotionCampaignBudget } from "./PromotionCampaignBudget";
export declare class PromotionCampaign {
    id: string;
    name: string;
    description: string | null;
    campaignIdentifier: string;
    startsAt: Date | null;
    endsAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    promotions: Promotion[];
    promotionCampaignBudget: PromotionCampaignBudget;
}
