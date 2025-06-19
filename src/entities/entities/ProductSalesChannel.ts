import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_20b454295", ["deletedAt"], {})
@Index("IDX_id_20b454295", ["id"], {})
@Index("IDX_product_id_20b454295", ["productId"], {})
@Index("product_sales_channel_pkey", ["productId", "salesChannelId"], {
  unique: true,
})
@Index("IDX_sales_channel_id_20b454295", ["salesChannelId"], {})
@Entity("product_sales_channel", { schema: "public" })
export class ProductSalesChannel {
  @Column("character varying", {
    primary: true,
    name: "product_id",
    length: 255,
  })
  productId: string;

  @Column("character varying", {
    primary: true,
    name: "sales_channel_id",
    length: 255,
  })
  salesChannelId: string;

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
