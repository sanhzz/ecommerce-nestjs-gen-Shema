import { Column, Entity, Index } from "typeorm";

@Index("cart_payment_collection_pkey", ["cartId", "paymentCollectionId"], {
  unique: true,
})
@Index("IDX_cart_id_-4a39f6c9", ["cartId"], {})
@Index("IDX_deleted_at_-4a39f6c9", ["deletedAt"], {})
@Index("IDX_id_-4a39f6c9", ["id"], {})
@Index("IDX_payment_collection_id_-4a39f6c9", ["paymentCollectionId"], {})
@Entity("cart_payment_collection", { schema: "public" })
export class CartPaymentCollection {
  @Column("character varying", { primary: true, name: "cart_id", length: 255 })
  cartId: string;

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
