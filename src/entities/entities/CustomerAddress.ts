import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Customer } from "./Customer";

@Index("IDX_customer_address_unique_customer_shipping", ["customerId"], {
  unique: true,
})
@Index("IDX_customer_address_unique_customer_billing", ["customerId"], {
  unique: true,
})
@Index("IDX_customer_address_customer_id", ["customerId"], {})
@Index("IDX_customer_address_deleted_at", ["deletedAt"], {})
@Index("customer_address_pkey", ["id"], { unique: true })
@Entity("customer_address", { schema: "public" })
export class CustomerAddress {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "customer_id" })
  customerId: string;

  @Column("text", { name: "address_name", nullable: true })
  addressName: string | null;

  @Column("boolean", { name: "is_default_shipping", default: () => "false" })
  isDefaultShipping: boolean;

  @Column("boolean", { name: "is_default_billing", default: () => "false" })
  isDefaultBilling: boolean;

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

  @OneToOne(() => Customer, (customer) => customer.customerAddress, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customer;
}
