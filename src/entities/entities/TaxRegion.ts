import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { TaxRate } from "./TaxRate";
import { TaxProvider } from "./TaxProvider";

@Index(
  "IDX_tax_region_unique_country_province",
  ["countryCode", "provinceCode"],
  { unique: true }
)
@Index("IDX_tax_region_unique_country_nullable_province", ["countryCode"], {
  unique: true,
})
@Index("IDX_tax_region_deleted_at", ["deletedAt"], {})
@Index("tax_region_pkey", ["id"], { unique: true })
@Index("IDX_tax_region_parent_id", ["parentId"], {})
@Index("IDX_tax_region_provider_id", ["providerId"], {})
@Entity("tax_region", { schema: "public" })
export class TaxRegion {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "provider_id", nullable: true })
  providerId: string | null;

  @Column("text", { name: "country_code" })
  countryCode: string;

  @Column("text", { name: "province_code", nullable: true })
  provinceCode: string | null;

  @Column("text", { name: "parent_id", nullable: true })
  parentId: string | null;

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

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToOne(() => TaxRate, (taxRate) => taxRate.taxRegion)
  taxRate: TaxRate;

  @ManyToOne(() => TaxRegion, (taxRegion) => taxRegion.taxRegions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: TaxRegion;

  @OneToMany(() => TaxRegion, (taxRegion) => taxRegion.parent)
  taxRegions: TaxRegion[];

  @ManyToOne(() => TaxProvider, (taxProvider) => taxProvider.taxRegions, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "provider_id", referencedColumnName: "id" }])
  provider: TaxProvider;
}
