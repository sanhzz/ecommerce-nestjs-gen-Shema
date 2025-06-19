import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Product } from "./Product";

@Index("IDX_category_handle_unique", ["handle"], { unique: true })
@Index("product_category_pkey", ["id"], { unique: true })
@Index("IDX_product_category_path", ["mpath"], {})
@Index("IDX_product_category_parent_category_id", ["parentCategoryId"], {})
@Entity("product_category", { schema: "public" })
export class ProductCategory {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "description", default: () => "''" })
  description: string;

  @Column("text", { name: "handle" })
  handle: string;

  @Column("text", { name: "mpath" })
  mpath: string;

  @Column("boolean", { name: "is_active", default: () => "false" })
  isActive: boolean;

  @Column("boolean", { name: "is_internal", default: () => "false" })
  isInternal: boolean;

  @Column("integer", { name: "rank", default: () => "0" })
  rank: number;

  @Column("text", { name: "parent_category_id", nullable: true })
  parentCategoryId: string | null;

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

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.productCategories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "parent_category_id", referencedColumnName: "id" }])
  parentCategory: ProductCategory;

  @OneToMany(
    () => ProductCategory,
    (productCategory) => productCategory.parentCategory
  )
  productCategories: ProductCategory[];

  @ManyToMany(() => Product, (product) => product.productCategories)
  @JoinTable({
    name: "product_category_product",
    joinColumns: [{ name: "product_category_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "product_id", referencedColumnName: "id" }],
    schema: "public",
  })
  products: Product[];
}
