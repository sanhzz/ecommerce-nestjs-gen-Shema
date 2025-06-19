import { Column, Entity, Index, OneToMany } from "typeorm";
import { Product } from "./Product";

@Index("IDX_product_collection_deleted_at", ["deletedAt"], {})
@Index("IDX_product_category_deleted_at", ["deletedAt"], {})
@Index("IDX_collection_handle_unique", ["handle"], { unique: true })
@Index("product_collection_pkey", ["id"], { unique: true })
@Entity("product_collection", { schema: "public" })
export class ProductCollection {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "handle" })
  handle: string;

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

  @OneToMany(() => Product, (product) => product.collection)
  products: Product[];
}
