import { Column, Entity, Index, OneToMany } from "typeorm";
import { Cart } from "./Cart";

@Index("IDX_cart_address_deleted_at", ["deletedAt"], {})
@Index("cart_address_pkey", ["id"], { unique: true })
@Entity("cart_address", { schema: "public" })
export class CartAddress {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "customer_id", nullable: true })
  customerId: string | null;

  @Column("text", { name: "company", nullable: true })
  company: string | null;

  @Column("text", { name: "first_name", nullable: true })
  firstName: string | null;

  @Column("text", { name: "last_name", nullable: true })
  lastName: string | null;

  @Column("text", { name: "address_1", nullable: true })
  address_1: string | null;

  @Column("text", { name: "address_2", nullable: true })
  address_2: string | null;

  @Column("text", { name: "city", nullable: true })
  city: string | null;

  @Column("text", { name: "country_code", nullable: true })
  countryCode: string | null;

  @Column("text", { name: "province", nullable: true })
  province: string | null;

  @Column("text", { name: "postal_code", nullable: true })
  postalCode: string | null;

  @Column("text", { name: "phone", nullable: true })
  phone: string | null;

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

  @OneToMany(() => Cart, (cart) => cart.billingAddress)
  carts: Cart[];

  @OneToMany(() => Cart, (cart) => cart.shippingAddress)
  carts2: Cart[];
}
