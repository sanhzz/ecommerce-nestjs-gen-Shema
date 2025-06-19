import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";

@Index("IDX_order_transaction_claim_id", ["claimId"], {})
@Index("IDX_order_transaction_currency_code", ["currencyCode"], {})
@Index("IDX_order_transaction_exchange_id", ["exchangeId"], {})
@Index("order_transaction_pkey", ["id"], { unique: true })
@Index("IDX_order_transaction_order_id_version", ["orderId", "version"], {})
@Index("IDX_order_transaction_reference_id", ["referenceId"], {})
@Index("IDX_order_transaction_return_id", ["returnId"], {})
@Entity("order_transaction", { schema: "public" })
export class OrderTransaction {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("integer", { name: "version", default: () => "1" })
  version: number;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("text", { name: "reference", nullable: true })
  reference: string | null;

  @Column("text", { name: "reference_id", nullable: true })
  referenceId: string | null;

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

  @ManyToOne(() => Order, (order) => order.orderTransactions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Order;
}
