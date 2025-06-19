import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { GeoZone } from "./GeoZone";
import { FulfillmentSet } from "./FulfillmentSet";
import { ShippingOption } from "./ShippingOption";

@Index("IDX_service_zone_deleted_at", ["deletedAt"], {})
@Index("IDX_service_zone_fulfillment_set_id", ["fulfillmentSetId"], {})
@Index("service_zone_pkey", ["id"], { unique: true })
@Index("IDX_service_zone_name_unique", ["name"], { unique: true })
@Entity("service_zone", { schema: "public" })
export class ServiceZone {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("text", { name: "fulfillment_set_id" })
  fulfillmentSetId: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => GeoZone, (geoZone) => geoZone.serviceZone)
  geoZones: GeoZone[];

  @ManyToOne(
    () => FulfillmentSet,
    (fulfillmentSet) => fulfillmentSet.serviceZones,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "fulfillment_set_id", referencedColumnName: "id" }])
  fulfillmentSet: FulfillmentSet;

  @OneToMany(
    () => ShippingOption,
    (shippingOption) => shippingOption.serviceZone
  )
  shippingOptions: ShippingOption[];
}
