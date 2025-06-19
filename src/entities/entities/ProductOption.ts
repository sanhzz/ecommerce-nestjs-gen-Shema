import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Product } from "./Product";
import { ProductOptionValue } from "./ProductOptionValue";

@Index("IDX_product_option_deleted_at", ["deletedAt"], {})
@Index("product_option_pkey", ["id"], { unique: true })
@Index("IDX_option_product_id_title_unique", ["productId", "title"], {
  unique: true,
})
@Index("IDX_product_option_product_id", ["productId"], {})
@Entity("product_option", { schema: "public" })
export class ProductOption {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "product_id" })
  productId: string;

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

  @ManyToOne(() => Product, (product) => product.productOptions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Product;

  @OneToMany(
    () => ProductOptionValue,
    (productOptionValue) => productOptionValue.option
  )
  productOptionValues: ProductOptionValue[];
}
