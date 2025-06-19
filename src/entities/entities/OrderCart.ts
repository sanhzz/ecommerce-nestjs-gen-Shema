import { Column, Entity, Index } from "typeorm";

@Index("order_cart_pkey", ["cartId", "orderId"], { unique: true })
@Index("IDX_cart_id_-71069c16", ["cartId"], {})
@Index("IDX_deleted_at_-71069c16", ["deletedAt"], {})
@Index("IDX_id_-71069c16", ["id"], {})
@Index("IDX_order_id_-71069c16", ["orderId"], {})
@Entity("order_cart", { schema: "public" })
export class OrderCart {
  @Column("character varying", { primary: true, name: "order_id", length: 255 })
  orderId: string;

  @Column("character varying", { primary: true, name: "cart_id", length: 255 })
  cartId: string;

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
