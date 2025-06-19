import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CartLineItem } from "./CartLineItem";

@Index("IDX_cart_line_item_tax_line_deleted_at", ["deletedAt"], {})
@Index("cart_line_item_tax_line_pkey", ["id"], { unique: true })
@Index("IDX_tax_line_item_id", ["itemId"], {})
@Index("IDX_cart_line_item_tax_line_item_id", ["itemId"], {})
@Index("IDX_line_item_tax_line_tax_rate_id", ["taxRateId"], {})
@Entity("cart_line_item_tax_line", { schema: "public" })
export class CartLineItemTaxLine {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "tax_rate_id", nullable: true })
  taxRateId: string | null;

  @Column("text", { name: "code" })
  code: string;

  @Column("real", { name: "rate", precision: 24 })
  rate: number;

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
    (cartLineItem) => cartLineItem.cartLineItemTaxLines,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: CartLineItem;
}
