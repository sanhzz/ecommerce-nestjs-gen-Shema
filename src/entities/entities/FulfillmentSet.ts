import { Column, Entity, Index, OneToMany } from "typeorm";
import { ServiceZone } from "./ServiceZone";

@Index("IDX_fulfillment_set_deleted_at", ["deletedAt"], {})
@Index("fulfillment_set_pkey", ["id"], { unique: true })
@Index("IDX_fulfillment_set_name_unique", ["name"], { unique: true })
@Entity("fulfillment_set", { schema: "public" })
export class FulfillmentSet {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "type" })
  type: string;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

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

  @OneToMany(() => ServiceZone, (serviceZone) => serviceZone.fulfillmentSet)
  serviceZones: ServiceZone[];
}
