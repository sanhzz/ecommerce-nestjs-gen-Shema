import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { InventoryItem } from "./InventoryItem";

@Index("IDX_inventory_level_deleted_at", ["deletedAt"], {})
@Index("inventory_level_pkey", ["id"], { unique: true })
@Index(
  "IDX_inventory_level_location_id_inventory_item_id",
  ["inventoryItemId", "locationId"],
  { unique: true }
)
@Index("IDX_inventory_level_inventory_item_id", ["inventoryItemId"], {})
@Index("IDX_inventory_level_item_location", ["inventoryItemId", "locationId"], {
  unique: true,
})
@Index("IDX_inventory_level_location_id", ["locationId"], {})
@Entity("inventory_level", { schema: "public" })
export class InventoryLevel {
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

  @Column("text", { name: "inventory_item_id" })
  inventoryItemId: string;

  @Column("text", { name: "location_id" })
  locationId: string;

  @Column("numeric", { name: "stocked_quantity", default: () => "0" })
  stockedQuantity: string;

  @Column("numeric", { name: "reserved_quantity", default: () => "0" })
  reservedQuantity: string;

  @Column("numeric", { name: "incoming_quantity", default: () => "0" })
  incomingQuantity: string;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("jsonb", { name: "raw_stocked_quantity", nullable: true })
  rawStockedQuantity: object | null;

  @Column("jsonb", { name: "raw_reserved_quantity", nullable: true })
  rawReservedQuantity: object | null;

  @Column("jsonb", { name: "raw_incoming_quantity", nullable: true })
  rawIncomingQuantity: object | null;

  @ManyToOne(
    () => InventoryItem,
    (inventoryItem) => inventoryItem.inventoryLevels,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "inventory_item_id", referencedColumnName: "id" }])
  inventoryItem: InventoryItem;
}
