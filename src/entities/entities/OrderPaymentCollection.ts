import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_f42b9949", ["deletedAt"], {})
@Index("IDX_id_f42b9949", ["id"], {})
@Index("IDX_order_id_f42b9949", ["orderId"], {})
@Index("order_payment_collection_pkey", ["orderId", "paymentCollectionId"], {
  unique: true,
})
@Index("IDX_payment_collection_id_f42b9949", ["paymentCollectionId"], {})
@Entity("order_payment_collection", { schema: "public" })
export class OrderPaymentCollection {
  @Column("character varying", { primary: true, name: "order_id", length: 255 })
  orderId: string;

  @Column("character varying", {
    primary: true,
    name: "payment_collection_id",
    length: 255,
  })
  paymentCollectionId: string;

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
