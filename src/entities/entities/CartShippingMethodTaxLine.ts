import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CartShippingMethod } from "./CartShippingMethod";

@Index("IDX_cart_shipping_method_tax_line_deleted_at", ["deletedAt"], {})
@Index("cart_shipping_method_tax_line_pkey", ["id"], { unique: true })
@Index(
  "IDX_cart_shipping_method_tax_line_shipping_method_id",
  ["shippingMethodId"],
  {}
)
@Index("IDX_tax_line_shipping_method_id", ["shippingMethodId"], {})
@Index("IDX_shipping_method_tax_line_tax_rate_id", ["taxRateId"], {})
@Entity("cart_shipping_method_tax_line", { schema: "public" })
export class CartShippingMethodTaxLine {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "tax_rate_id", nullable: true })
  taxRateId: string | null;

  @Column("text", { name: "code" })
  code: string;

  @Column("real", { name: "rate", precision: 24 })
  rate: number;

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
    (cartShippingMethod) => cartShippingMethod.cartShippingMethodTaxLines,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_method_id", referencedColumnName: "id" }])
  shippingMethod: CartShippingMethod;
}
