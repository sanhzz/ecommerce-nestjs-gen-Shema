import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fulfillment } from "./Fulfillment";

@Index("IDX_fulfillment_item_deleted_at", ["deletedAt"], {})
@Index("IDX_fulfillment_item_fulfillment_id", ["fulfillmentId"], {})
@Index("fulfillment_item_pkey", ["id"], { unique: true })
@Index("IDX_fulfillment_item_inventory_item_id", ["inventoryItemId"], {})
@Index("IDX_fulfillment_item_line_item_id", ["lineItemId"], {})
@Entity("fulfillment_item", { schema: "public" })
export class FulfillmentItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "sku" })
  sku: string;

  @Column("text", { name: "barcode" })
  barcode: string;

  @Column("numeric", { name: "quantity" })
  quantity: string;

  @Column("jsonb", { name: "raw_quantity" })
  rawQuantity: object;

  @Column("text", { name: "line_item_id", nullable: true })
  lineItemId: string | null;

  @Column("text", { name: "inventory_item_id", nullable: true })
  inventoryItemId: string | null;

  @Column("text", { name: "fulfillment_id" })
  fulfillmentId: string;

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

  @ManyToOne(() => Fulfillment, (fulfillment) => fulfillment.fulfillmentItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "fulfillment_id", referencedColumnName: "id" }])
  fulfillment: Fulfillment;
}
