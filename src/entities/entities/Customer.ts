import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { CustomerAddress } from "./CustomerAddress";
import { CustomerGroupCustomer } from "./CustomerGroupCustomer";

@Index("IDX_customer_deleted_at", ["deletedAt"], {})
@Index("IDX_customer_email_has_account_unique", ["email", "hasAccount"], {
  unique: true,
})
@Index("customer_pkey", ["id"], { unique: true })
@Entity("customer", { schema: "public" })
export class Customer {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "company_name", nullable: true })
  companyName: string | null;

  @Column("text", { name: "first_name", nullable: true })
  firstName: string | null;

  @Column("text", { name: "last_name", nullable: true })
  lastName: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("text", { name: "phone", nullable: true })
  phone: string | null;

  @Column("boolean", { name: "has_account", default: () => "false" })
  hasAccount: boolean;

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

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @OneToOne(
    () => CustomerAddress,
    (customerAddress) => customerAddress.customer
  )
  customerAddress: CustomerAddress;

  @OneToMany(
    () => CustomerGroupCustomer,
    (customerGroupCustomer) => customerGroupCustomer.customer
  )
  customerGroupCustomers: CustomerGroupCustomer[];
}
