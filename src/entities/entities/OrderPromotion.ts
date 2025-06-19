import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_-71518339", ["deletedAt"], {})
@Index("IDX_id_-71518339", ["id"], {})
@Index("order_promotion_pkey", ["orderId", "promotionId"], { unique: true })
@Index("IDX_order_id_-71518339", ["orderId"], {})
@Index("IDX_promotion_id_-71518339", ["promotionId"], {})
@Entity("order_promotion", { schema: "public" })
export class OrderPromotion {
  @Column("character varying", { primary: true, name: "order_id", length: 255 })
  orderId: string;

  @Column("character varying", {
    primary: true,
    name: "promotion_id",
    length: 255,
  })
  promotionId: string;

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
