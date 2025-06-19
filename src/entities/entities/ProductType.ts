import { Column, Entity, Index, OneToMany } from "typeorm";
import { Product } from "./Product";

@Index("IDX_product_type_deleted_at", ["deletedAt"], {})
@Index("product_type_pkey", ["id"], { unique: true })
@Index("IDX_type_value_unique", ["value"], { unique: true })
@Entity("product_type", { schema: "public" })
export class ProductType {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "value" })
  value: string;

  @Column("json", { name: "metadata", nullable: true })
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

  @OneToMany(() => Product, (product) => product.type)
  products: Product[];
}
