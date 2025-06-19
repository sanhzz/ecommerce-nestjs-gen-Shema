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
import { Image } from "./Image";
import { ProductCollection } from "./ProductCollection";
import { ProductType } from "./ProductType";
import { ProductCategory } from "./ProductCategory";
import { ProductOption } from "./ProductOption";
import { ProductTag } from "./ProductTag";
import { ProductVariant } from "./ProductVariant";

@Index("IDX_product_collection_id", ["collectionId"], {})
@Index("IDX_product_deleted_at", ["deletedAt"], {})
@Index("IDX_product_handle_unique", ["handle"], { unique: true })
@Index("product_pkey", ["id"], { unique: true })
@Index("IDX_product_type_id", ["typeId"], {})
@Entity("product", { schema: "public" })
export class Product {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "handle" })
  handle: string;

  @Column("text", { name: "subtitle", nullable: true })
  subtitle: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "is_giftcard", default: () => "false" })
  isGiftcard: boolean;

  @Column("text", { name: "status", default: () => "'draft'" })
  status: string;

  @Column("text", { name: "thumbnail", nullable: true })
  thumbnail: string | null;

  @Column("text", { name: "weight", nullable: true })
  weight: string | null;

  @Column("text", { name: "length", nullable: true })
  length: string | null;

  @Column("text", { name: "height", nullable: true })
  height: string | null;

  @Column("text", { name: "width", nullable: true })
  width: string | null;

  @Column("text", { name: "origin_country", nullable: true })
  originCountry: string | null;

  @Column("text", { name: "hs_code", nullable: true })
  hsCode: string | null;

  @Column("text", { name: "mid_code", nullable: true })
  midCode: string | null;

  @Column("text", { name: "material", nullable: true })
  material: string | null;

  @Column("text", { name: "collection_id", nullable: true })
  collectionId: string | null;

  @Column("text", { name: "type_id", nullable: true })
  typeId: string | null;

  @Column("boolean", { name: "discountable", default: () => "true" })
  discountable: boolean;

  @Column("text", { name: "external_id", nullable: true })
  externalId: string | null;

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

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @ManyToOne(
    () => ProductCollection,
    (productCollection) => productCollection.products,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "collection_id", referencedColumnName: "id" }])
  collection: ProductCollection;

  @ManyToOne(() => ProductType, (productType) => productType.products, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: ProductType;

  @ManyToMany(
    () => ProductCategory,
    (productCategory) => productCategory.products
  )
  productCategories: ProductCategory[];

  @OneToMany(() => ProductOption, (productOption) => productOption.product)
  productOptions: ProductOption[];

  @ManyToMany(() => ProductTag, (productTag) => productTag.products)
  @JoinTable({
    name: "product_tags",
    joinColumns: [{ name: "product_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "product_tag_id", referencedColumnName: "id" },
    ],
    schema: "public",
  })
  productTags: ProductTag[];

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
  productVariants: ProductVariant[];
}
