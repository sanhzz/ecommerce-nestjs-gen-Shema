import { Column, Entity, Index } from "typeorm";

@Index("IDX_cart_id_-a9d4a70b", ["cartId"], {})
@Index("cart_promotion_pkey", ["cartId", "promotionId"], { unique: true })
@Index("IDX_deleted_at_-a9d4a70b", ["deletedAt"], {})
@Index("IDX_id_-a9d4a70b", ["id"], {})
@Index("IDX_promotion_id_-a9d4a70b", ["promotionId"], {})
@Entity("cart_promotion", { schema: "public" })
export class CartPromotion {
  @Column("character varying", { primary: true, name: "cart_id", length: 255 })
  cartId: string;

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
