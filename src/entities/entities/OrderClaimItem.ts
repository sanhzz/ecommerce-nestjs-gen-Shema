import { Column, Entity, Index } from "typeorm";

@Index("IDX_order_claim_item_claim_id", ["claimId"], {})
@Index("IDX_order_claim_item_deleted_at", ["deletedAt"], {})
@Index("order_claim_item_pkey", ["id"], { unique: true })
@Index("IDX_order_claim_item_item_id", ["itemId"], {})
@Entity("order_claim_item", { schema: "public" })
export class OrderClaimItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "claim_id" })
  claimId: string;

  @Column("text", { name: "item_id" })
  itemId: string;

  @Column("boolean", { name: "is_additional_item", default: () => "false" })
  isAdditionalItem: boolean;

  @Column("enum", {
    name: "reason",
    nullable: true,
    enum: ["missing_item", "wrong_item", "production_failure", "other"],
  })
  reason: "missing_item" | "wrong_item" | "production_failure" | "other" | null;

  @Column("numeric", { name: "quantity" })
  quantity: string;

  @Column("jsonb", { name: "raw_quantity" })
  rawQuantity: object;

  @Column("text", { name: "note", nullable: true })
  note: string | null;

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
}
