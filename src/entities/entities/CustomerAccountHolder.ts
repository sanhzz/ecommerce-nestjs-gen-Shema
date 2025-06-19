import { Column, Entity, Index } from "typeorm";

@Index("customer_account_holder_pkey", ["accountHolderId", "customerId"], {
  unique: true,
})
@Index("IDX_account_holder_id_5cb3a0c0", ["accountHolderId"], {})
@Index("IDX_customer_id_5cb3a0c0", ["customerId"], {})
@Index("IDX_deleted_at_5cb3a0c0", ["deletedAt"], {})
@Index("IDX_id_5cb3a0c0", ["id"], {})
@Entity("customer_account_holder", { schema: "public" })
export class CustomerAccountHolder {
  @Column("character varying", {
    primary: true,
    name: "customer_id",
    length: 255,
  })
  customerId: string;

  @Column("character varying", {
    primary: true,
    name: "account_holder_id",
    length: 255,
  })
  accountHolderId: string;

  @Column("character varying", { name: "id", length: 255 })
  id: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
