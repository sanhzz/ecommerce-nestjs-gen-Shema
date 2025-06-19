import { Column, Entity, Index, OneToMany } from "typeorm";
import { OrderShippingMethodAdjustment } from "./OrderShippingMethodAdjustment";
import { OrderShippingMethodTaxLine } from "./OrderShippingMethodTaxLine";

@Index("order_shipping_method_pkey", ["id"], { unique: true })
@Index("IDX_order_shipping_method_shipping_option_id", ["shippingOptionId"], {})
@Entity("order_shipping_method", { schema: "public" })
export class OrderShippingMethod {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("jsonb", { name: "description", nullable: true })
  description: object | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("boolean", { name: "is_tax_inclusive", default: () => "false" })
  isTaxInclusive: boolean;

  @Column("text", { name: "shipping_option_id", nullable: true })
  shippingOptionId: string | null;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

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

  @Column("boolean", { name: "is_custom_amount", default: () => "false" })
  isCustomAmount: boolean;

  @OneToMany(
    () => OrderShippingMethodAdjustment,
    (orderShippingMethodAdjustment) =>
      orderShippingMethodAdjustment.shippingMethod
  )
  orderShippingMethodAdjustments: OrderShippingMethodAdjustment[];

  @OneToMany(
    () => OrderShippingMethodTaxLine,
    (orderShippingMethodTaxLine) => orderShippingMethodTaxLine.shippingMethod
  )
  orderShippingMethodTaxLines: OrderShippingMethodTaxLine[];
}
