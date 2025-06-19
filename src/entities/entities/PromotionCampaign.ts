import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { Promotion } from "./Promotion";
import { PromotionCampaignBudget } from "./PromotionCampaignBudget";

@Index(
  "IDX_promotion_campaign_campaign_identifier_unique",
  ["campaignIdentifier"],
  { unique: true }
)
@Index("IDX_promotion_campaign_deleted_at", ["deletedAt"], {})
@Index("promotion_campaign_pkey", ["id"], { unique: true })
@Entity("promotion_campaign", { schema: "public" })
export class PromotionCampaign {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "campaign_identifier" })
  campaignIdentifier: string;

  @Column("timestamp with time zone", { name: "starts_at", nullable: true })
  startsAt: Date | null;

  @Column("timestamp with time zone", { name: "ends_at", nullable: true })
  endsAt: Date | null;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Promotion, (promotion) => promotion.campaign)
  promotions: Promotion[];

  @OneToOne(
    () => PromotionCampaignBudget,
    (promotionCampaignBudget) => promotionCampaignBudget.campaign
  )
  promotionCampaignBudget: PromotionCampaignBudget;
}
