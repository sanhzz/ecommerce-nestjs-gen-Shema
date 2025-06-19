import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { PromotionCampaign } from "./PromotionCampaign";
import { PromotionApplicationMethod } from "./PromotionApplicationMethod";
import { PromotionRule } from "./PromotionRule";

@Index("IDX_promotion_campaign_id", ["campaignId"], {})
@Index("IDX_unique_promotion_code", ["code"], { unique: true })
@Index("IDX_promotion_deleted_at", ["deletedAt"], {})
@Index("promotion_pkey", ["id"], { unique: true })
@Index("IDX_promotion_status", ["status"], {})
@Index("IDX_promotion_type", ["type"], {})
@Entity("promotion", { schema: "public" })
export class Promotion {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "code" })
  code: string;

  @Column("text", { name: "campaign_id", nullable: true })
  campaignId: string | null;

  @Column("boolean", { name: "is_automatic", default: () => "false" })
  isAutomatic: boolean;

  @Column("text", { name: "type" })
  type: string;

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

  @Column("text", { name: "status", default: () => "'draft'" })
  status: string;

  @ManyToOne(
    () => PromotionCampaign,
    (promotionCampaign) => promotionCampaign.promotions,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "campaign_id", referencedColumnName: "id" }])
  campaign: PromotionCampaign;

  @OneToOne(
    () => PromotionApplicationMethod,
    (promotionApplicationMethod) => promotionApplicationMethod.promotion
  )
  promotionApplicationMethod: PromotionApplicationMethod;

  @ManyToMany(() => PromotionRule, (promotionRule) => promotionRule.promotions)
  @JoinTable({
    name: "promotion_promotion_rule",
    joinColumns: [{ name: "promotion_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "promotion_rule_id", referencedColumnName: "id" },
    ],
    schema: "public",
  })
  promotionRules: PromotionRule[];
}
