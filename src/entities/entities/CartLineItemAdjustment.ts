import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CartLineItem } from "./CartLineItem";

@Index("IDX_cart_line_item_adjustment_deleted_at", ["deletedAt"], {})
@Index("cart_line_item_adjustment_pkey", ["id"], { unique: true })
@Index("IDX_adjustment_item_id", ["itemId"], {})
@Index("IDX_cart_line_item_adjustment_item_id", ["itemId"], {})
@Index("IDX_line_item_adjustment_promotion_id", ["promotionId"], {})
@Entity("cart_line_item_adjustment", { schema: "public" })
export class CartLineItemAdjustment {
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

  @Column("text", { name: "item_id", nullable: true })
  itemId: string | null;

  @ManyToOne(
    () => CartLineItem,
    (cartLineItem) => cartLineItem.cartLineItemAdjustments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: CartLineItem;
}
