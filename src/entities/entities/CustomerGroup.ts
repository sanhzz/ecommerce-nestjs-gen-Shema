import { Column, Entity, Index, OneToMany } from "typeorm";
import { CustomerGroupCustomer } from "./CustomerGroupCustomer";

@Index("IDX_customer_group_deleted_at", ["deletedAt"], {})
@Index("customer_group_pkey", ["id"], { unique: true })
@Index("IDX_customer_group_name", ["name"], { unique: true })
@Index("IDX_customer_group_name_unique", ["name"], { unique: true })
@Entity("customer_group", { schema: "public" })
export class CustomerGroup {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

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

  @OneToMany(
    () => CustomerGroupCustomer,
    (customerGroupCustomer) => customerGroupCustomer.customerGroup
  )
  customerGroupCustomers: CustomerGroupCustomer[];
}
