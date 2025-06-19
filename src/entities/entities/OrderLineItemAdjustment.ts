import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { OrderLineItem } from "./OrderLineItem";

@Index("order_line_item_adjustment_pkey", ["id"], { unique: true })
@Index("IDX_order_line_item_adjustment_item_id", ["itemId"], {})
@Entity("order_line_item_adjustment", { schema: "public" })
export class OrderLineItemAdjustment {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "promotion_id", nullable: true })
  promotionId: string | null;

  @Column("text", { name: "code", nullable: true })
  code: string | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("text", { name: "provider_id", nullable: true })
  providerId: string | null;

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

  @Column("text", { name: "item_id" })
  itemId: string;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => OrderLineItem,
    (orderLineItem) => orderLineItem.orderLineItemAdjustments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: OrderLineItem;
}
