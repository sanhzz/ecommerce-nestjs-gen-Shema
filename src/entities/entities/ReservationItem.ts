import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { InventoryItem } from "./InventoryItem";

@Index("IDX_reservation_item_deleted_at", ["deletedAt"], {})
@Index("reservation_item_pkey", ["id"], { unique: true })
@Index("IDX_reservation_item_inventory_item_id", ["inventoryItemId"], {})
@Index("IDX_reservation_item_line_item_id", ["lineItemId"], {})
@Index("IDX_reservation_item_location_id", ["locationId"], {})
@Entity("reservation_item", { schema: "public" })
export class ReservationItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

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

  @Column("text", { name: "line_item_id", nullable: true })
  lineItemId: string | null;

  @Column("text", { name: "location_id" })
  locationId: string;

  @Column("numeric", { name: "quantity" })
  quantity: string;

  @Column("text", { name: "external_id", nullable: true })
  externalId: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("text", { name: "inventory_item_id" })
  inventoryItemId: string;

  @Column("boolean", {
    name: "allow_backorder",
    nullable: true,
    default: () => "false",
  })
  allowBackorder: boolean | null;

  @Column("jsonb", { name: "raw_quantity", nullable: true })
  rawQuantity: object | null;

  @ManyToOne(
    () => InventoryItem,
    (inventoryItem) => inventoryItem.reservationItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "inventory_item_id", referencedColumnName: "id" }])
  inventoryItem: InventoryItem;
}
