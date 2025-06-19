import { Column, Entity, Index } from "typeorm";

@Index("IDX_return_item_deleted_at", ["deletedAt"], {})
@Index("return_item_pkey", ["id"], { unique: true })
@Index("IDX_return_item_item_id", ["itemId"], {})
@Index("IDX_return_item_reason_id", ["reasonId"], {})
@Index("IDX_return_item_return_id", ["returnId"], {})
@Entity("return_item", { schema: "public" })
export class ReturnItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "return_id" })
  returnId: string;

  @Column("text", { name: "reason_id", nullable: true })
  reasonId: string | null;

  @Column("text", { name: "item_id" })
  itemId: string;

  @Column("numeric", { name: "quantity" })
  quantity: string;

  @Column("jsonb", { name: "raw_quantity" })
  rawQuantity: object;

  @Column("numeric", { name: "received_quantity", default: () => "0" })
  receivedQuantity: string;

  @Column("jsonb", { name: "raw_received_quantity" })
  rawReceivedQuantity: object;

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

  @Column("numeric", { name: "damaged_quantity", default: () => "0" })
  damagedQuantity: string;

  @Column("jsonb", { name: "raw_damaged_quantity" })
  rawDamagedQuantity: object;
}
