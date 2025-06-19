import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_-1e5992737", ["deletedAt"], {})
@Index(
  "location_fulfillment_provider_pkey",
  ["fulfillmentProviderId", "stockLocationId"],
  { unique: true }
)
@Index("IDX_fulfillment_provider_id_-1e5992737", ["fulfillmentProviderId"], {})
@Index("IDX_id_-1e5992737", ["id"], {})
@Index("IDX_stock_location_id_-1e5992737", ["stockLocationId"], {})
@Entity("location_fulfillment_provider", { schema: "public" })
export class LocationFulfillmentProvider {
  @Column("character varying", {
    primary: true,
    name: "stock_location_id",
    length: 255,
  })
  stockLocationId: string;

  @Column("character varying", {
    primary: true,
    name: "fulfillment_provider_id",
    length: 255,
  })
  fulfillmentProviderId: string;

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
