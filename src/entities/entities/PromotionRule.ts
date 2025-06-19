import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { PromotionApplicationMethod } from "./PromotionApplicationMethod";
import { Promotion } from "./Promotion";
import { PromotionRuleValue } from "./PromotionRuleValue";

@Index("IDX_promotion_rule_attribute", ["attribute"], {})
@Index("IDX_promotion_rule_deleted_at", ["deletedAt"], {})
@Index("promotion_rule_pkey", ["id"], { unique: true })
@Index("IDX_promotion_rule_operator", ["operator"], {})
@Entity("promotion_rule", { schema: "public" })
export class PromotionRule {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "attribute" })
  attribute: string;

  @Column("text", { name: "operator" })
  operator: string;

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

  @ManyToMany(
    () => PromotionApplicationMethod,
    (promotionApplicationMethod) => promotionApplicationMethod.promotionRules
  )
  promotionApplicationMethods: PromotionApplicationMethod[];

  @ManyToMany(
    () => PromotionApplicationMethod,
    (promotionApplicationMethod) => promotionApplicationMethod.promotionRules2
  )
  promotionApplicationMethods2: PromotionApplicationMethod[];

  @ManyToMany(() => Promotion, (promotion) => promotion.promotionRules)
  promotions: Promotion[];

  @OneToMany(
    () => PromotionRuleValue,
    (promotionRuleValue) => promotionRuleValue.promotionRule
  )
  promotionRuleValues: PromotionRuleValue[];
}
