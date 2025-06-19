import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_-1d67bae40", ["deletedAt"], {})
@Index("IDX_id_-1d67bae40", ["id"], {})
@Index("IDX_publishable_key_id_-1d67bae40", ["publishableKeyId"], {})
@Index(
  "publishable_api_key_sales_channel_pkey",
  ["publishableKeyId", "salesChannelId"],
  { unique: true }
)
@Index("IDX_sales_channel_id_-1d67bae40", ["salesChannelId"], {})
@Entity("publishable_api_key_sales_channel", { schema: "public" })
export class PublishableApiKeySalesChannel {
  @Column("character varying", {
    primary: true,
    name: "publishable_key_id",
    length: 255,
  })
  publishableKeyId: string;

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
