import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_17b4c4e35", ["deletedAt"], {})
@Index("IDX_id_17b4c4e35", ["id"], {})
@Index(
  "product_variant_inventory_item_pkey",
  ["inventoryItemId", "variantId"],
  { unique: true }
)
@Index("IDX_inventory_item_id_17b4c4e35", ["inventoryItemId"], {})
@Index("IDX_variant_id_17b4c4e35", ["variantId"], {})
@Entity("product_variant_inventory_item", { schema: "public" })
export class ProductVariantInventoryItem {
  @Column("character varying", {
    primary: true,
    name: "variant_id",
    length: 255,
  })
  variantId: string;

  @Column("character varying", {
    primary: true,
    name: "inventory_item_id",
    length: 255,
  })
  inventoryItemId: string;

  @Column("character varying", { name: "id", length: 255 })
  id: string;

  @Column("integer", { name: "required_quantity", default: () => "1" })
  requiredQuantity: number;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
