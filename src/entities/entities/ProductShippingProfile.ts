import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_17a262437", ["deletedAt"], {})
@Index("IDX_id_17a262437", ["id"], {})
@Index("IDX_product_id_17a262437", ["productId"], {})
@Index("product_shipping_profile_pkey", ["productId", "shippingProfileId"], {
  unique: true,
})
@Index("IDX_shipping_profile_id_17a262437", ["shippingProfileId"], {})
@Entity("product_shipping_profile", { schema: "public" })
export class ProductShippingProfile {
  @Column("character varying", {
    primary: true,
    name: "product_id",
    length: 255,
  })
  productId: string;

  @Column("character varying", {
    primary: true,
    name: "shipping_profile_id",
    length: 255,
  })
  shippingProfileId: string;

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
