import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CartAddress } from "./CartAddress";
import { CartLineItem } from "./CartLineItem";
import { CartShippingMethod } from "./CartShippingMethod";
import { CreditLine } from "./CreditLine";

@Index("IDX_cart_billing_address_id", ["billingAddressId"], {})
@Index("IDX_cart_currency_code", ["currencyCode"], {})
@Index("IDX_cart_customer_id", ["customerId"], {})
@Index("IDX_cart_deleted_at", ["deletedAt"], {})
@Index("cart_pkey", ["id"], { unique: true })
@Index("IDX_cart_region_id", ["regionId"], {})
@Index("IDX_cart_sales_channel_id", ["salesChannelId"], {})
@Index("IDX_cart_shipping_address_id", ["shippingAddressId"], {})
@Entity("cart", { schema: "public" })
export class Cart {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "region_id", nullable: true })
  regionId: string | null;

  @Column("text", { name: "customer_id", nullable: true })
  customerId: string | null;

  @Column("text", { name: "sales_channel_id", nullable: true })
  salesChannelId: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("text", { name: "shipping_address_id", nullable: true })
  shippingAddressId: string | null;

  @Column("text", { name: "billing_address_id", nullable: true })
  billingAddressId: string | null;

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

  @Column("timestamp with time zone", { name: "completed_at", nullable: true })
  completedAt: Date | null;

  @ManyToOne(() => CartAddress, (cartAddress) => cartAddress.carts, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "billing_address_id", referencedColumnName: "id" }])
  billingAddress: CartAddress;

  @ManyToOne(() => CartAddress, (cartAddress) => cartAddress.carts2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "shipping_address_id", referencedColumnName: "id" }])
  shippingAddress: CartAddress;

  @OneToMany(() => CartLineItem, (cartLineItem) => cartLineItem.cart)
  cartLineItems: CartLineItem[];

  @OneToMany(
    () => CartShippingMethod,
    (cartShippingMethod) => cartShippingMethod.cart
  )
  cartShippingMethods: CartShippingMethod[];

  @OneToMany(() => CreditLine, (creditLine) => creditLine.cart)
  creditLines: CreditLine[];
}
