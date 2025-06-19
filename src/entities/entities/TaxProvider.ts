import { Column, Entity, Index, OneToMany } from "typeorm";
import { TaxRegion } from "./TaxRegion";

@Index("IDX_tax_provider_deleted_at", ["deletedAt"], {})
@Index("tax_provider_pkey", ["id"], { unique: true })
@Entity("tax_provider", { schema: "public" })
export class TaxProvider {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("boolean", { name: "is_enabled", default: () => "true" })
  isEnabled: boolean;

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

  @OneToMany(() => TaxRegion, (taxRegion) => taxRegion.provider)
  taxRegions: TaxRegion[];
}
