import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Region } from "./Region";

@Index("IDX_region_country_deleted_at", ["deletedAt"], {})
@Index("region_country_pkey", ["iso_2"], { unique: true })
@Index("IDX_region_country_region_id_iso_2_unique", ["iso_2", "regionId"], {
  unique: true,
})
@Index("IDX_region_country_region_id", ["regionId"], {})
@Entity("region_country", { schema: "public" })
export class RegionCountry {
  @Column("text", { primary: true, name: "iso_2" })
  iso_2: string;

  @Column("text", { name: "iso_3" })
  iso_3: string;

  @Column("text", { name: "num_code" })
  numCode: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "display_name" })
  displayName: string;

  @Column("text", { name: "region_id", nullable: true })
  regionId: string | null;

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

  @ManyToOne(() => Region, (region) => region.regionCountries, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "region_id", referencedColumnName: "id" }])
  region: Region;
}
