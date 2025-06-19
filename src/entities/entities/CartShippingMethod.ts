import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cart } from "./Cart";
import { CartShippingMethodAdjustment } from "./CartShippingMethodAdjustment";
import { CartShippingMethodTaxLine } from "./CartShippingMethodTaxLine";

@Index("IDX_cart_shipping_method_cart_id", ["cartId"], {})
@Index("IDX_shipping_method_cart_id", ["cartId"], {})
@Index("IDX_cart_shipping_method_deleted_at", ["deletedAt"], {})
@Index("cart_shipping_method_pkey", ["id"], { unique: true })
@Index("IDX_shipping_method_option_id", ["shippingOptionId"], {})
@Entity("cart_shipping_method", { schema: "public" })
export class CartShippingMethod {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "cart_id" })
  cartId: string;

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

  @ManyToOne(() => Cart, (cart) => cart.cartShippingMethods, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "cart_id", referencedColumnName: "id" }])
  cart: Cart;

  @OneToMany(
    () => CartShippingMethodAdjustment,
    (cartShippingMethodAdjustment) =>
      cartShippingMethodAdjustment.shippingMethod
  )
  cartShippingMethodAdjustments: CartShippingMethodAdjustment[];

  @OneToMany(
    () => CartShippingMethodTaxLine,
    (cartShippingMethodTaxLine) => cartShippingMethodTaxLine.shippingMethod
  )
  cartShippingMethodTaxLines: CartShippingMethodTaxLine[];
}
