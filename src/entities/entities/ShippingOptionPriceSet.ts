import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_ba32fa9c", ["deletedAt"], {})
@Index("IDX_id_ba32fa9c", ["id"], {})
@Index("IDX_price_set_id_ba32fa9c", ["priceSetId"], {})
@Index("shipping_option_price_set_pkey", ["priceSetId", "shippingOptionId"], {
  unique: true,
})
@Index("IDX_shipping_option_id_ba32fa9c", ["shippingOptionId"], {})
@Entity("shipping_option_price_set", { schema: "public" })
export class ShippingOptionPriceSet {
  @Column("character varying", {
    primary: true,
    name: "shipping_option_id",
    length: 255,
  })
  shippingOptionId: string;

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
