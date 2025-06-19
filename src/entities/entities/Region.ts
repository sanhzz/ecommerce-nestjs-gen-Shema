import { Column, Entity, Index, OneToMany } from "typeorm";
import { RegionCountry } from "./RegionCountry";

@Index("IDX_region_deleted_at", ["deletedAt"], {})
@Index("region_pkey", ["id"], { unique: true })
@Entity("region", { schema: "public" })
export class Region {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

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

  @Column("boolean", { name: "automatic_taxes", default: () => "true" })
  automaticTaxes: boolean;

  @OneToMany(() => RegionCountry, (regionCountry) => regionCountry.region)
  regionCountries: RegionCountry[];
}
