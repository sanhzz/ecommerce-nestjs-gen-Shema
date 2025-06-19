import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_-e88adb96", ["deletedAt"], {})
@Index("IDX_fulfillment_set_id_-e88adb96", ["fulfillmentSetId"], {})
@Index(
  "location_fulfillment_set_pkey",
  ["fulfillmentSetId", "stockLocationId"],
  { unique: true }
)
@Index("IDX_id_-e88adb96", ["id"], {})
@Index("IDX_stock_location_id_-e88adb96", ["stockLocationId"], {})
@Entity("location_fulfillment_set", { schema: "public" })
export class LocationFulfillmentSet {
  @Column("character varying", {
    primary: true,
    name: "stock_location_id",
    length: 255,
  })
  stockLocationId: string;

  @Column("character varying", {
    primary: true,
    name: "fulfillment_set_id",
    length: 255,
  })
  fulfillmentSetId: string;

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
