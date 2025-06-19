import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";

@Index("IDX_order_credit_line_deleted_at", ["deletedAt"], {})
@Index("order_credit_line_pkey", ["id"], { unique: true })
@Index("IDX_order_credit_line_order_id", ["orderId"], {})
@Entity("order_credit_line", { schema: "public" })
export class OrderCreditLine {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("text", { name: "reference", nullable: true })
  reference: string | null;

  @Column("text", { name: "reference_id", nullable: true })
  referenceId: string | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

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

  @ManyToOne(() => Order, (order) => order.orderCreditLines, {
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Order;
}
