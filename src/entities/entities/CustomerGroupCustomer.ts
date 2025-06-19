import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CustomerGroup } from "./CustomerGroup";
import { Customer } from "./Customer";

@Index("IDX_customer_group_customer_customer_group_id", ["customerGroupId"], {})
@Index("IDX_customer_group_customer_customer_id", ["customerId"], {})
@Index("IDX_customer_group_customer_deleted_at", ["deletedAt"], {})
@Index("customer_group_customer_pkey", ["id"], { unique: true })
@Entity("customer_group_customer", { schema: "public" })
export class CustomerGroupCustomer {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "customer_id" })
  customerId: string;

  @Column("text", { name: "customer_group_id" })
  customerGroupId: string;

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

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => CustomerGroup,
    (customerGroup) => customerGroup.customerGroupCustomers,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "customer_group_id", referencedColumnName: "id" }])
  customerGroup: CustomerGroup;

  @ManyToOne(() => Customer, (customer) => customer.customerGroupCustomers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customer;
}
