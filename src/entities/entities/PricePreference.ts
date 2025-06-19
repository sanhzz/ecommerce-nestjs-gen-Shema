import { Column, Entity, Index } from "typeorm";

@Index("IDX_price_preference_attribute_value", ["attribute", "value"], {
  unique: true,
})
@Index("IDX_price_preference_deleted_at", ["deletedAt"], {})
@Index("price_preference_pkey", ["id"], { unique: true })
@Entity("price_preference", { schema: "public" })
export class PricePreference {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "attribute" })
  attribute: string;

  @Column("text", { name: "value", nullable: true })
  value: string | null;

  @Column("boolean", { name: "is_tax_inclusive", default: () => "false" })
  isTaxInclusive: boolean;

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
}
