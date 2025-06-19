import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PromotionRule } from "./PromotionRule";

@Index("IDX_promotion_rule_value_deleted_at", ["deletedAt"], {})
@Index("promotion_rule_value_pkey", ["id"], { unique: true })
@Index("IDX_promotion_rule_value_promotion_rule_id", ["promotionRuleId"], {})
@Entity("promotion_rule_value", { schema: "public" })
export class PromotionRuleValue {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "promotion_rule_id" })
  promotionRuleId: string;

  @Column("text", { name: "value" })
  value: string;

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

  @ManyToOne(
    () => PromotionRule,
    (promotionRule) => promotionRule.promotionRuleValues,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "promotion_rule_id", referencedColumnName: "id" }])
  promotionRule: PromotionRule;
}
