import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderChange } from "./OrderChange";

@Index("IDX_order_change_action_claim_id", ["claimId"], {})
@Index("IDX_order_change_action_deleted_at", ["deletedAt"], {})
@Index("IDX_order_change_action_exchange_id", ["exchangeId"], {})
@Index("order_change_action_pkey", ["id"], { unique: true })
@Index("IDX_order_change_action_order_change_id", ["orderChangeId"], {})
@Index("IDX_order_change_action_order_id", ["orderId"], {})
@Index("IDX_order_change_action_ordering", ["ordering"], {})
@Index("IDX_order_change_action_return_id", ["returnId"], {})
@Entity("order_change_action", { schema: "public" })
export class OrderChangeAction {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id", nullable: true })
  orderId: string | null;

  @Column("integer", { name: "version", nullable: true })
  version: number | null;

  @PrimaryGeneratedColumn({ type: "bigint", name: "ordering" })
  ordering: string;

  @Column("text", { name: "order_change_id", nullable: true })
  orderChangeId: string | null;

  @Column("text", { name: "reference", nullable: true })
  reference: string | null;

  @Column("text", { name: "reference_id", nullable: true })
  referenceId: string | null;

  @Column("text", { name: "action" })
  action: string;

  @Column("jsonb", { name: "details", nullable: true })
  details: object | null;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("jsonb", { name: "raw_amount", nullable: true })
  rawAmount: object | null;

  @Column("text", { name: "internal_note", nullable: true })
  internalNote: string | null;

  @Column("boolean", { name: "applied", default: () => "false" })
  applied: boolean;

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

  @ManyToOne(
    () => OrderChange,
    (orderChange) => orderChange.orderChangeActions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "order_change_id", referencedColumnName: "id" }])
  orderChange: OrderChange;
}
