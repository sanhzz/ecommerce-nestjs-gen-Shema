import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OrderItem } from "./OrderItem";
import { OrderLineItemAdjustment } from "./OrderLineItemAdjustment";
import { OrderLineItemTaxLine } from "./OrderLineItemTaxLine";

@Index("order_line_item_pkey", ["id"], { unique: true })
@Index("IDX_order_line_item_product_id", ["productId"], {})
@Index("IDX_order_line_item_variant_id", ["variantId"], {})
@Entity("order_line_item", { schema: "public" })
export class OrderLineItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "subtitle", nullable: true })
  subtitle: string | null;

  @Column("text", { name: "thumbnail", nullable: true })
  thumbnail: string | null;

  @Column("text", { name: "variant_id", nullable: true })
  variantId: string | null;

  @Column("text", { name: "product_id", nullable: true })
  productId: string | null;

  @Column("text", { name: "product_title", nullable: true })
  productTitle: string | null;

  @Column("text", { name: "product_description", nullable: true })
  productDescription: string | null;

  @Column("text", { name: "product_subtitle", nullable: true })
  productSubtitle: string | null;

  @Column("text", { name: "product_type", nullable: true })
  productType: string | null;

  @Column("text", { name: "product_collection", nullable: true })
  productCollection: string | null;

  @Column("text", { name: "product_handle", nullable: true })
  productHandle: string | null;

  @Column("text", { name: "variant_sku", nullable: true })
  variantSku: string | null;

  @Column("text", { name: "variant_barcode", nullable: true })
  variantBarcode: string | null;

  @Column("text", { name: "variant_title", nullable: true })
  variantTitle: string | null;

  @Column("jsonb", { name: "variant_option_values", nullable: true })
  variantOptionValues: object | null;

  @Column("boolean", { name: "requires_shipping", default: () => "true" })
  requiresShipping: boolean;

  @Column("boolean", { name: "is_discountable", default: () => "true" })
  isDiscountable: boolean;

  @Column("boolean", { name: "is_tax_inclusive", default: () => "false" })
  isTaxInclusive: boolean;

  @Column("numeric", { name: "compare_at_unit_price", nullable: true })
  compareAtUnitPrice: string | null;

  @Column("jsonb", { name: "raw_compare_at_unit_price", nullable: true })
  rawCompareAtUnitPrice: object | null;

  @Column("numeric", { name: "unit_price" })
  unitPrice: string;

  @Column("jsonb", { name: "raw_unit_price" })
  rawUnitPrice: object;

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

  @Column("boolean", { name: "is_custom_price", default: () => "false" })
  isCustomPrice: boolean;

  @Column("text", { name: "product_type_id", nullable: true })
  productTypeId: string | null;

  @Column("boolean", { name: "is_giftcard", default: () => "false" })
  isGiftcard: boolean;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.item)
  orderItems: OrderItem[];

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.orderLineItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "totals_id", referencedColumnName: "id" }])
  totals: OrderItem;

  @OneToMany(
    () => OrderLineItemAdjustment,
    (orderLineItemAdjustment) => orderLineItemAdjustment.item
  )
  orderLineItemAdjustments: OrderLineItemAdjustment[];

  @OneToMany(
    () => OrderLineItemTaxLine,
    (orderLineItemTaxLine) => orderLineItemTaxLine.item
  )
  orderLineItemTaxLines: OrderLineItemTaxLine[];
}
