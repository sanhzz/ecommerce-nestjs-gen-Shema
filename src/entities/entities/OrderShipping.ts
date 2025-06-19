import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";

@Index("IDX_order_shipping_claim_id", ["claimId"], {})
@Index("IDX_order_shipping_deleted_at", ["deletedAt"], {})
@Index("IDX_order_shipping_exchange_id", ["exchangeId"], {})
@Index("order_shipping_pkey", ["id"], { unique: true })
@Index("IDX_order_shipping_order_id", ["orderId"], {})
@Index("IDX_order_shipping_order_id_version", ["orderId", "version"], {})
@Index("IDX_order_shipping_return_id", ["returnId"], {})
@Index("IDX_order_shipping_item_id", ["shippingMethodId"], {})
@Entity("order_shipping", { schema: "public" })
export class OrderShipping {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("integer", { name: "version" })
  version: number;

  @Column("text", { name: "shipping_method_id" })
  shippingMethodId: string;

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

  @Column("text", { name: "return_id", nullable: true })
  returnId: string | null;

  @Column("text", { name: "claim_id", nullable: true })
  claimId: string | null;

  @Column("text", { name: "exchange_id", nullable: true })
  exchangeId: string | null;

  @ManyToOne(() => Order, (order) => order.orderShippings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Order;
}
