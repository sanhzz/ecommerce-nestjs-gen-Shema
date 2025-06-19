import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { OrderShippingMethod } from "./OrderShippingMethod";

@Index("order_shipping_method_tax_line_pkey", ["id"], { unique: true })
@Index(
  "IDX_order_shipping_method_tax_line_shipping_method_id",
  ["shippingMethodId"],
  {}
)
@Entity("order_shipping_method_tax_line", { schema: "public" })
export class OrderShippingMethodTaxLine {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "tax_rate_id", nullable: true })
  taxRateId: string | null;

  @Column("text", { name: "code" })
  code: string;

  @Column("numeric", { name: "rate" })
  rate: string;

  @Column("jsonb", { name: "raw_rate" })
  rawRate: object;

  @Column("text", { name: "provider_id", nullable: true })
  providerId: string | null;

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

  @Column("text", { name: "shipping_method_id" })
  shippingMethodId: string;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => OrderShippingMethod,
    (orderShippingMethod) => orderShippingMethod.orderShippingMethodTaxLines,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_method_id", referencedColumnName: "id" }])
  shippingMethod: OrderShippingMethod;
}
