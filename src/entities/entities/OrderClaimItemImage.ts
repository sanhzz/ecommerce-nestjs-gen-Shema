import { Column, Entity, Index } from "typeorm";

@Index("IDX_order_claim_item_image_claim_item_id", ["claimItemId"], {})
@Index("IDX_order_claim_item_image_deleted_at", ["deletedAt"], {})
@Index("order_claim_item_image_pkey", ["id"], { unique: true })
@Entity("order_claim_item_image", { schema: "public" })
export class OrderClaimItemImage {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "claim_item_id" })
  claimItemId: string;

  @Column("text", { name: "url" })
  url: string;

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
