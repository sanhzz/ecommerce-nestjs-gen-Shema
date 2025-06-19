import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TaxRate } from "./TaxRate";

@Index("IDX_tax_rate_rule_deleted_at", ["deletedAt"], {})
@Index("tax_rate_rule_pkey", ["id"], { unique: true })
@Index(
  "IDX_tax_rate_rule_unique_rate_reference",
  ["referenceId", "taxRateId"],
  { unique: true }
)
@Index("IDX_tax_rate_rule_reference_id", ["referenceId"], {})
@Index("IDX_tax_rate_rule_tax_rate_id", ["taxRateId"], {})
@Entity("tax_rate_rule", { schema: "public" })
export class TaxRateRule {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "tax_rate_id" })
  taxRateId: string;

  @Column("text", { name: "reference_id" })
  referenceId: string;

  @Column("text", { name: "reference" })
  reference: string;

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

  @ManyToOne(() => TaxRate, (taxRate) => taxRate.taxRateRules, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "tax_rate_id", referencedColumnName: "id" }])
  taxRate: TaxRate;
}
