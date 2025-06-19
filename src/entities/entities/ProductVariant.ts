import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Product } from "./Product";
import { ProductOptionValue } from "./ProductOptionValue";

@Index("IDX_product_variant_barcode_unique", ["barcode"], { unique: true })
@Index("IDX_product_variant_deleted_at", ["deletedAt"], {})
@Index("IDX_product_variant_ean_unique", ["ean"], { unique: true })
@Index("product_variant_pkey", ["id"], { unique: true })
@Index("IDX_product_variant_id_product_id", ["id", "productId"], {})
@Index("IDX_product_variant_product_id", ["productId"], {})
@Index("IDX_product_variant_sku_unique", ["sku"], { unique: true })
@Index("IDX_product_variant_upc_unique", ["upc"], { unique: true })
@Entity("product_variant", { schema: "public" })
export class ProductVariant {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "sku", nullable: true })
  sku: string | null;

  @Column("text", { name: "barcode", nullable: true })
  barcode: string | null;

  @Column("text", { name: "ean", nullable: true })
  ean: string | null;

  @Column("text", { name: "upc", nullable: true })
  upc: string | null;

  @Column("boolean", { name: "allow_backorder", default: () => "false" })
  allowBackorder: boolean;

  @Column("boolean", { name: "manage_inventory", default: () => "true" })
  manageInventory: boolean;

  @Column("text", { name: "hs_code", nullable: true })
  hsCode: string | null;

  @Column("text", { name: "origin_country", nullable: true })
  originCountry: string | null;

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

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("integer", {
    name: "variant_rank",
    nullable: true,
    default: () => "0",
  })
  variantRank: number | null;

  @Column("text", { name: "product_id", nullable: true })
  productId: string | null;

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

  @ManyToOne(() => Product, (product) => product.productVariants, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Product;

  @ManyToMany(
    () => ProductOptionValue,
    (productOptionValue) => productOptionValue.productVariants
  )
  productOptionValues: ProductOptionValue[];
}
