import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { PromotionCampaign } from "./PromotionCampaign";

@Index("IDX_promotion_campaign_budget_campaign_id_unique", ["campaignId"], {
  unique: true,
})
@Index("IDX_promotion_campaign_budget_deleted_at", ["deletedAt"], {})
@Index("promotion_campaign_budget_pkey", ["id"], { unique: true })
@Index("IDX_campaign_budget_type", ["type"], {})
@Entity("promotion_campaign_budget", { schema: "public" })
export class PromotionCampaignBudget {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "type" })
  type: string;

  @Column("text", { name: "campaign_id" })
  campaignId: string;

  @Column("numeric", { name: "limit", nullable: true })
  limit: string | null;

  @Column("jsonb", { name: "raw_limit", nullable: true })
  rawLimit: object | null;

  @Column("numeric", { name: "used", default: () => "0" })
  used: string;

  @Column("jsonb", { name: "raw_used" })
  rawUsed: object;

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

  @Column("text", { name: "currency_code", nullable: true })
  currencyCode: string | null;

  @OneToOne(
    () => PromotionCampaign,
    (promotionCampaign) => promotionCampaign.promotionCampaignBudget,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "campaign_id", referencedColumnName: "id" }])
  campaign: PromotionCampaign;
}
