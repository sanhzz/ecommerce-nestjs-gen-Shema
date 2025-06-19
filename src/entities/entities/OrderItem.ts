import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OrderLineItem } from "./OrderLineItem";
import { Order } from "./Order";

@Index("IDX_order_item_deleted_at", ["deletedAt"], {})
@Index("order_item_pkey", ["id"], { unique: true })
@Index("IDX_order_item_item_id", ["itemId"], {})
@Index("IDX_order_item_order_id_version", ["orderId", "version"], {})
@Index("IDX_order_item_order_id", ["orderId"], {})
@Entity("order_item", { schema: "public" })
export class OrderItem {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("integer", { name: "version" })
  version: number;

  @Column("text", { name: "item_id" })
  itemId: string;

  @Column("numeric", { name: "quantity" })
  quantity: string;

  @Column("jsonb", { name: "raw_quantity" })
  rawQuantity: object;

  @Column("numeric", { name: "fulfilled_quantity" })
  fulfilledQuantity: string;

  @Column("jsonb", { name: "raw_fulfilled_quantity" })
  rawFulfilledQuantity: object;

  @Column("numeric", { name: "shipped_quantity" })
  shippedQuantity: string;

  @Column("jsonb", { name: "raw_shipped_quantity" })
  rawShippedQuantity: object;

  @Column("numeric", { name: "return_requested_quantity" })
  returnRequestedQuantity: string;

  @Column("jsonb", { name: "raw_return_requested_quantity" })
  rawReturnRequestedQuantity: object;

  @Column("numeric", { name: "return_received_quantity" })
  returnReceivedQuantity: string;

  @Column("jsonb", { name: "raw_return_received_quantity" })
  rawReturnReceivedQuantity: object;

  @Column("numeric", { name: "return_dismissed_quantity" })
  returnDismissedQuantity: string;

  @Column("jsonb", { name: "raw_return_dismissed_quantity" })
  rawReturnDismissedQuantity: object;

  @Column("numeric", { name: "written_off_quantity" })
  writtenOffQuantity: string;

  @Column("jsonb", { name: "raw_written_off_quantity" })
  rawWrittenOffQuantity: object;

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

  @Column("numeric", { name: "delivered_quantity", default: () => "0" })
  deliveredQuantity: string;

  @Column("jsonb", { name: "raw_delivered_quantity" })
  rawDeliveredQuantity: object;

  @Column("numeric", { name: "unit_price", nullable: true })
  unitPrice: string | null;

  @Column("jsonb", { name: "raw_unit_price", nullable: true })
  rawUnitPrice: object | null;

  @Column("numeric", { name: "compare_at_unit_price", nullable: true })
  compareAtUnitPrice: string | null;

  @Column("jsonb", { name: "raw_compare_at_unit_price", nullable: true })
  rawCompareAtUnitPrice: object | null;

  @ManyToOne(() => OrderLineItem, (orderLineItem) => orderLineItem.orderItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "item_id", referencedColumnName: "id" }])
  item: OrderLineItem;

  @ManyToOne(() => Order, (order) => order.orderItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Order;

  @OneToMany(() => OrderLineItem, (orderLineItem) => orderLineItem.totals)
  orderLineItems: OrderLineItem[];
}
