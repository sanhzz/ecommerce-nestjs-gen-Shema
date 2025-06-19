import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { TaxRegion } from "./TaxRegion";
import { TaxRateRule } from "./TaxRateRule";

@Index("IDX_tax_rate_deleted_at", ["deletedAt"], {})
@Index("tax_rate_pkey", ["id"], { unique: true })
@Index("IDX_single_default_region", ["taxRegionId"], { unique: true })
@Index("IDX_tax_rate_tax_region_id", ["taxRegionId"], {})
@Entity("tax_rate", { schema: "public" })
export class TaxRate {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("real", { name: "rate", nullable: true, precision: 24 })
  rate: number | null;

  @Column("text", { name: "code" })
  code: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("boolean", { name: "is_default", default: () => "false" })
  isDefault: boolean;

  @Column("boolean", { name: "is_combinable", default: () => "false" })
  isCombinable: boolean;

  @Column("text", { name: "tax_region_id" })
  taxRegionId: string;

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

  @OneToOne(() => TaxRegion, (taxRegion) => taxRegion.taxRate, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "tax_region_id", referencedColumnName: "id" }])
  taxRegion: TaxRegion;

  @OneToMany(() => TaxRateRule, (taxRateRule) => taxRateRule.taxRate)
  taxRateRules: TaxRateRule[];
}
