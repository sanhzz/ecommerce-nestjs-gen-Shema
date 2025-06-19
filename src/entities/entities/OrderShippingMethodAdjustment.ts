import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { OrderShippingMethod } from "./OrderShippingMethod";

@Index("order_shipping_method_adjustment_pkey", ["id"], { unique: true })
@Index(
  "IDX_order_shipping_method_adjustment_shipping_method_id",
  ["shippingMethodId"],
  {}
)
@Entity("order_shipping_method_adjustment", { schema: "public" })
export class OrderShippingMethodAdjustment {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "promotion_id", nullable: true })
  promotionId: string | null;

  @Column("text", { name: "code", nullable: true })
  code: string | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

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
    (orderShippingMethod) => orderShippingMethod.orderShippingMethodAdjustments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_method_id", referencedColumnName: "id" }])
  shippingMethod: OrderShippingMethod;
}
