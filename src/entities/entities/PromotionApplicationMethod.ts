import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from "typeorm";
import { PromotionRule } from "./PromotionRule";
import { Promotion } from "./Promotion";

@Index("IDX_application_method_allocation", ["allocation"], {})
@Index("IDX_promotion_application_method_currency_code", ["currencyCode"], {})
@Index("IDX_promotion_application_method_deleted_at", ["deletedAt"], {})
@Index("promotion_application_method_pkey", ["id"], { unique: true })
@Index(
  "IDX_promotion_application_method_promotion_id_unique",
  ["promotionId"],
  { unique: true }
)
@Index("IDX_application_method_target_type", ["targetType"], {})
@Index("IDX_application_method_type", ["type"], {})
@Entity("promotion_application_method", { schema: "public" })
export class PromotionApplicationMethod {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "value", nullable: true })
  value: string | null;

  @Column("jsonb", { name: "raw_value", nullable: true })
  rawValue: object | null;

  @Column("integer", { name: "max_quantity", nullable: true })
  maxQuantity: number | null;

  @Column("integer", { name: "apply_to_quantity", nullable: true })
  applyToQuantity: number | null;

  @Column("integer", { name: "buy_rules_min_quantity", nullable: true })
  buyRulesMinQuantity: number | null;

  @Column("text", { name: "type" })
  type: string;

  @Column("text", { name: "target_type" })
  targetType: string;

  @Column("text", { name: "allocation", nullable: true })
  allocation: string | null;

  @Column("text", { name: "promotion_id" })
  promotionId: string;

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

  @ManyToMany(
    () => PromotionRule,
    (promotionRule) => promotionRule.promotionApplicationMethods
  )
  @JoinTable({
    name: "application_method_buy_rules",
    joinColumns: [
      { name: "application_method_id", referencedColumnName: "id" },
    ],
    inverseJoinColumns: [
      { name: "promotion_rule_id", referencedColumnName: "id" },
    ],
    schema: "public",
  })
  promotionRules: PromotionRule[];

  @ManyToMany(
    () => PromotionRule,
    (promotionRule) => promotionRule.promotionApplicationMethods2
  )
  @JoinTable({
    name: "application_method_target_rules",
    joinColumns: [
      { name: "application_method_id", referencedColumnName: "id" },
    ],
    inverseJoinColumns: [
      { name: "promotion_rule_id", referencedColumnName: "id" },
    ],
    schema: "public",
  })
  promotionRules2: PromotionRule[];

  @OneToOne(
    () => Promotion,
    (promotion) => promotion.promotionApplicationMethod,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "promotion_id", referencedColumnName: "id" }])
  promotion: Promotion;
}
