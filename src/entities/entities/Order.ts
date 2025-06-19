import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderAddress } from "./OrderAddress";
import { OrderChange } from "./OrderChange";
import { OrderCreditLine } from "./OrderCreditLine";
import { OrderItem } from "./OrderItem";
import { OrderShipping } from "./OrderShipping";
import { OrderSummary } from "./OrderSummary";
import { OrderTransaction } from "./OrderTransaction";

@Index("IDX_order_billing_address_id", ["billingAddressId"], {})
@Index("IDX_order_currency_code", ["currencyCode"], {})
@Index("IDX_order_customer_id", ["customerId"], {})
@Index("IDX_order_deleted_at", ["deletedAt"], {})
@Index("IDX_order_display_id", ["displayId"], {})
@Index("order_pkey", ["id"], { unique: true })
@Index("IDX_order_is_draft_order", ["isDraftOrder"], {})
@Index("IDX_order_region_id", ["regionId"], {})
@Index("IDX_order_shipping_address_id", ["shippingAddressId"], {})
@Entity("order", { schema: "public" })
export class Order {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "region_id", nullable: true })
  regionId: string | null;

  @PrimaryGeneratedColumn({
    type: "integer",
    name: "display_id",
    // nullable: true,
  })
  displayId: number | null;

  @Column("text", { name: "customer_id", nullable: true })
  customerId: string | null;

  @Column("integer", { name: "version", default: () => "1" })
  version: number;

  @Column("text", { name: "sales_channel_id", nullable: true })
  salesChannelId: string | null;

  @Column("enum", {
    name: "status",
    enum: [
      "pending",
      "completed",
      "draft",
      "archived",
      "canceled",
      "requires_action",
    ],
    default: () => "'pending'",
  })
  status:
    | "pending"
    | "completed"
    | "draft"
    | "archived"
    | "canceled"
    | "requires_action";

  @Column("boolean", { name: "is_draft_order", default: () => "false" })
  isDraftOrder: boolean;

  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("text", { name: "shipping_address_id", nullable: true })
  shippingAddressId: string | null;

  @Column("text", { name: "billing_address_id", nullable: true })
  billingAddressId: string | null;

  @Column("boolean", { name: "no_notification", nullable: true })
  noNotification: boolean | null;

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

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

  @ManyToOne(() => OrderAddress, (orderAddress) => orderAddress.orders, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "billing_address_id", referencedColumnName: "id" }])
  billingAddress: OrderAddress;

  @ManyToOne(() => OrderAddress, (orderAddress) => orderAddress.orders2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "shipping_address_id", referencedColumnName: "id" }])
  shippingAddress: OrderAddress;

  @OneToMany(() => OrderChange, (orderChange) => orderChange.order)
  orderChanges: OrderChange[];

  @OneToMany(() => OrderCreditLine, (orderCreditLine) => orderCreditLine.order)
  orderCreditLines: OrderCreditLine[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @OneToMany(() => OrderShipping, (orderShipping) => orderShipping.order)
  orderShippings: OrderShipping[];

  @OneToMany(() => OrderSummary, (orderSummary) => orderSummary.order)
  orderSummaries: OrderSummary[];

  @OneToMany(
    () => OrderTransaction,
    (orderTransaction) => orderTransaction.order
  )
  orderTransactions: OrderTransaction[];
}
