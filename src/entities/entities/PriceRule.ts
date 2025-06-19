import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Price } from "./Price";

@Index("IDX_price_rule_attribute", ["attribute"], {})
@Index(
  "IDX_price_rule_price_id_attribute_operator_unique",
  ["attribute", "operator", "priceId"],
  { unique: true }
)
@Index("IDX_price_rule_attribute_value", ["attribute", "value"], {})
@Index("IDX_price_rule_deleted_at", ["deletedAt"], {})
@Index("price_rule_pkey", ["id"], { unique: true })
@Index("IDX_price_rule_operator_value", ["operator", "value"], {})
@Index("IDX_price_rule_operator", ["operator"], {})
@Index("IDX_price_rule_price_id", ["priceId"], {})
@Entity("price_rule", { schema: "public" })
export class PriceRule {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "value" })
  value: string;

  @Column("integer", { name: "priority", default: () => "0" })
  priority: number;

  @Column("text", { name: "price_id" })
  priceId: string;

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

  @Column("text", { name: "attribute", default: () => "''" })
  attribute: string;

  @Column("text", { name: "operator", default: () => "'eq'" })
  operator: string;

  @ManyToOne(() => Price, (price) => price.priceRules, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "price_id", referencedColumnName: "id" }])
  price: Price;
}
