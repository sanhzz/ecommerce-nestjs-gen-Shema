import { Column, Entity, Index, OneToMany } from "typeorm";
import { InventoryLevel } from "./InventoryLevel";
import { ReservationItem } from "./ReservationItem";

@Index("IDX_inventory_item_deleted_at", ["deletedAt"], {})
@Index("inventory_item_pkey", ["id"], { unique: true })
@Index("IDX_inventory_item_sku", ["sku"], { unique: true })
@Entity("inventory_item", { schema: "public" })
export class InventoryItem {
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

  @Column("text", { name: "sku", nullable: true })
  sku: string | null;

  @Column("text", { name: "origin_country", nullable: true })
  originCountry: string | null;

  @Column("text", { name: "hs_code", nullable: true })
  hsCode: string | null;

  @Column("text", { name: "mid_code", nullable: true })
  midCode: string | null;

  @Column("text", { name: "material", nullable: true })
  material: string | null;

  @Column("integer", { name: "weight", nullable: true })
  weight: number | null;

  @Column("integer", { name: "length", nullable: true })
  length: number | null;

  @Column("integer", { name: "height", nullable: true })
  height: number | null;

  @Column("integer", { name: "width", nullable: true })
  width: number | null;

  @Column("boolean", { name: "requires_shipping", default: () => "true" })
  requiresShipping: boolean;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "title", nullable: true })
  title: string | null;

  @Column("text", { name: "thumbnail", nullable: true })
  thumbnail: string | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @OneToMany(
    () => InventoryLevel,
    (inventoryLevel) => inventoryLevel.inventoryItem
  )
  inventoryLevels: InventoryLevel[];

  @OneToMany(
    () => ReservationItem,
    (reservationItem) => reservationItem.inventoryItem
  )
  reservationItems: ReservationItem[];
}
