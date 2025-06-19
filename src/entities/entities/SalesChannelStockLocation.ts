import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_26d06f470", ["deletedAt"], {})
@Index("IDX_id_26d06f470", ["id"], {})
@Index("IDX_sales_channel_id_26d06f470", ["salesChannelId"], {})
@Index(
  "sales_channel_stock_location_pkey",
  ["salesChannelId", "stockLocationId"],
  { unique: true }
)
@Index("IDX_stock_location_id_26d06f470", ["stockLocationId"], {})
@Entity("sales_channel_stock_location", { schema: "public" })
export class SalesChannelStockLocation {
  @Column("character varying", {
    primary: true,
    name: "sales_channel_id",
    length: 255,
  })
  salesChannelId: string;

  @Column("character varying", {
    primary: true,
    name: "stock_location_id",
    length: 255,
  })
  stockLocationId: string;

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
