import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ServiceZone } from "./ServiceZone";

@Index("IDX_geo_zone_city", ["city"], {})
@Index("IDX_geo_zone_country_code", ["countryCode"], {})
@Index("IDX_geo_zone_deleted_at", ["deletedAt"], {})
@Index("geo_zone_pkey", ["id"], { unique: true })
@Index("IDX_geo_zone_province_code", ["provinceCode"], {})
@Index("IDX_geo_zone_service_zone_id", ["serviceZoneId"], {})
@Entity("geo_zone", { schema: "public" })
export class GeoZone {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "type", default: () => "'country'" })
  type: string;

  @Column("text", { name: "country_code" })
  countryCode: string;

  @Column("text", { name: "province_code", nullable: true })
  provinceCode: string | null;

  @Column("text", { name: "city", nullable: true })
  city: string | null;

  @Column("text", { name: "service_zone_id" })
  serviceZoneId: string;

  @Column("jsonb", { name: "postal_expression", nullable: true })
  postalExpression: object | null;

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

  @ManyToOne(() => ServiceZone, (serviceZone) => serviceZone.geoZones, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "service_zone_id", referencedColumnName: "id" }])
  serviceZone: ServiceZone;
}
