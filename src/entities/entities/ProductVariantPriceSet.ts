import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_52b23597", ["deletedAt"], {})
@Index("IDX_id_52b23597", ["id"], {})
@Index("product_variant_price_set_pkey", ["priceSetId", "variantId"], {
  unique: true,
})
@Index("IDX_price_set_id_52b23597", ["priceSetId"], {})
@Index("IDX_variant_id_52b23597", ["variantId"], {})
@Entity("product_variant_price_set", { schema: "public" })
export class ProductVariantPriceSet {
  @Column("character varying", {
    primary: true,
    name: "variant_id",
    length: 255,
  })
  variantId: string;

  @Column("character varying", {
    primary: true,
    name: "price_set_id",
    length: 255,
  })
  priceSetId: string;

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
