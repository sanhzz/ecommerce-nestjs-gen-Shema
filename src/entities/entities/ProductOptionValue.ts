import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { ProductOption } from "./ProductOption";
import { ProductVariant } from "./ProductVariant";

@Index("IDX_product_option_value_deleted_at", ["deletedAt"], {})
@Index("product_option_value_pkey", ["id"], { unique: true })
@Index("IDX_option_value_option_id_unique", ["optionId", "value"], {
  unique: true,
})
@Index("IDX_product_option_value_option_id", ["optionId"], {})
@Entity("product_option_value", { schema: "public" })
export class ProductOptionValue {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "value" })
  value: string;

  @Column("text", { name: "option_id", nullable: true })
  optionId: string | null;

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

  @ManyToOne(
    () => ProductOption,
    (productOption) => productOption.productOptionValues,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "option_id", referencedColumnName: "id" }])
  option: ProductOption;

  @ManyToMany(
    () => ProductVariant,
    (productVariant) => productVariant.productOptionValues
  )
  @JoinTable({
    name: "product_variant_option",
    joinColumns: [{ name: "option_value_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "variant_id", referencedColumnName: "id" }],
    schema: "public",
  })
  productVariants: ProductVariant[];
}
