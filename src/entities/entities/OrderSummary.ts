import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";

@Index("IDX_order_summary_deleted_at", ["deletedAt"], {})
@Index("order_summary_pkey", ["id"], { unique: true })
@Index("IDX_order_summary_order_id_version", ["orderId", "version"], {})
@Entity("order_summary", { schema: "public" })
export class OrderSummary {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("integer", { name: "version", default: () => "1" })
  version: number;

  @Column("jsonb", { name: "totals", nullable: true })
  totals: object | null;

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

  @ManyToOne(() => Order, (order) => order.orderSummaries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Order;
}
