import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Index("IDX_image_deleted_at", ["deletedAt"], {})
@Index("image_pkey", ["id"], { unique: true })
@Index("IDX_image_product_id", ["productId"], {})
@Index("IDX_product_image_url", ["url"], {})
@Entity("image", { schema: "public" })
export class Image {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "url" })
  url: string;

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

  @Column("integer", { name: "rank", default: () => "0" })
  rank: number;

  @Column("text", { name: "product_id" })
  productId: string;

  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Product;
}
