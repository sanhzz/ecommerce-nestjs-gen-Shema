import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_-e8d2543e", ["deletedAt"], {})
@Index("order_fulfillment_pkey", ["fulfillmentId", "orderId"], { unique: true })
@Index("IDX_fulfillment_id_-e8d2543e", ["fulfillmentId"], {})
@Index("IDX_id_-e8d2543e", ["id"], {})
@Index("IDX_order_id_-e8d2543e", ["orderId"], {})
@Entity("order_fulfillment", { schema: "public" })
export class OrderFulfillment {
  @Column("character varying", { primary: true, name: "order_id", length: 255 })
  orderId: string;

  @Column("character varying", {
    primary: true,
    name: "fulfillment_id",
    length: 255,
  })
  fulfillmentId: string;

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
