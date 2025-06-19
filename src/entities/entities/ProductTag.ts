import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Product } from "./Product";

@Index("IDX_product_tag_deleted_at", ["deletedAt"], {})
@Index("product_tag_pkey", ["id"], { unique: true })
@Index("IDX_tag_value_unique", ["value"], { unique: true })
@Entity("product_tag", { schema: "public" })
export class ProductTag {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "value" })
  value: string;

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

  @ManyToMany(() => Product, (product) => product.productTags)
  products: Product[];
}
