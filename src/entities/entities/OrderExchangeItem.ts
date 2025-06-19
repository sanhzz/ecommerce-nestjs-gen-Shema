import { Column, Entity, Index } from "typeorm";

@Index("IDX_order_exchange_item_deleted_at", ["deletedAt"], {})
@Index("IDX_order_exchange_item_exchange_id", ["exchangeId"], {})
@Index("order_exchange_item_pkey", ["id"], { unique: true })
@Index("IDX_order_exchange_item_item_id", ["itemId"], {})
@Entity("order_exchange_item", { schema: "public" })
export class OrderExchangeItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "exchange_id" })
  exchangeId: string;

  @Column("text", { name: "item_id" })
  itemId: string;

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
