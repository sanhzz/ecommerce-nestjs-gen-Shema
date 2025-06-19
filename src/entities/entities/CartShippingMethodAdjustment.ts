import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CartShippingMethod } from "./CartShippingMethod";

@Index("IDX_cart_shipping_method_adjustment_deleted_at", ["deletedAt"], {})
@Index("cart_shipping_method_adjustment_pkey", ["id"], { unique: true })
@Index("IDX_shipping_method_adjustment_promotion_id", ["promotionId"], {})
@Index(
  "IDX_cart_shipping_method_adjustment_shipping_method_id",
  ["shippingMethodId"],
  {}
)
@Index("IDX_adjustment_shipping_method_id", ["shippingMethodId"], {})
@Entity("cart_shipping_method_adjustment", { schema: "public" })
export class CartShippingMethodAdjustment {
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

  @Column("text", { name: "shipping_method_id", nullable: true })
  shippingMethodId: string | null;

  @ManyToOne(
    () => CartShippingMethod,
    (cartShippingMethod) => cartShippingMethod.cartShippingMethodAdjustments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_method_id", referencedColumnName: "id" }])
  shippingMethod: CartShippingMethod;
}
