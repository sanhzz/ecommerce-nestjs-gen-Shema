import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ShippingOption } from "./ShippingOption";

@Index("IDX_shipping_option_rule_deleted_at", ["deletedAt"], {})
@Index("shipping_option_rule_pkey", ["id"], { unique: true })
@Index("IDX_shipping_option_rule_shipping_option_id", ["shippingOptionId"], {})
@Entity("shipping_option_rule", { schema: "public" })
export class ShippingOptionRule {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "attribute" })
  attribute: string;

  @Column("text", { name: "operator" })
  operator: string;

  @Column("jsonb", { name: "value", nullable: true })
  value: object | null;

  @Column("text", { name: "shipping_option_id" })
  shippingOptionId: string;

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
    () => ShippingOption,
    (shippingOption) => shippingOption.shippingOptionRules,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_option_id", referencedColumnName: "id" }])
  shippingOption: ShippingOption;
}
