import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Order } from "./Order";
import { OrderChangeAction } from "./OrderChangeAction";

@Index("IDX_order_change_change_type", ["changeType"], {})
@Index("IDX_order_change_claim_id", ["claimId"], {})
@Index("IDX_order_change_deleted_at", ["deletedAt"], {})
@Index("IDX_order_change_exchange_id", ["exchangeId"], {})
@Index("order_change_pkey", ["id"], { unique: true })
@Index("IDX_order_change_order_id", ["orderId"], {})
@Index("IDX_order_change_order_id_version", ["orderId", "version"], {})
@Index("IDX_order_change_return_id", ["returnId"], {})
@Index("IDX_order_change_status", ["status"], {})
@Entity("order_change", { schema: "public" })
export class OrderChange {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("integer", { name: "version" })
  version: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "status", default: () => "'pending'" })
  status: string;

  @Column("text", { name: "internal_note", nullable: true })
  internalNote: string | null;

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @Column("text", { name: "requested_by", nullable: true })
  requestedBy: string | null;

  @Column("timestamp with time zone", { name: "requested_at", nullable: true })
  requestedAt: Date | null;

  @Column("text", { name: "confirmed_by", nullable: true })
  confirmedBy: string | null;

  @Column("timestamp with time zone", { name: "confirmed_at", nullable: true })
  confirmedAt: Date | null;

  @Column("text", { name: "declined_by", nullable: true })
  declinedBy: string | null;

  @Column("text", { name: "declined_reason", nullable: true })
  declinedReason: string | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("timestamp with time zone", { name: "declined_at", nullable: true })
  declinedAt: Date | null;

  @Column("text", { name: "canceled_by", nullable: true })
  canceledBy: string | null;

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

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

  @Column("text", { name: "change_type", nullable: true })
  changeType: string | null;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "return_id", nullable: true })
  returnId: string | null;

  @Column("text", { name: "claim_id", nullable: true })
  claimId: string | null;

  @Column("text", { name: "exchange_id", nullable: true })
  exchangeId: string | null;

  @ManyToOne(() => Order, (order) => order.orderChanges, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Order;

  @OneToMany(
    () => OrderChangeAction,
    (orderChangeAction) => orderChangeAction.orderChange
  )
  orderChangeActions: OrderChangeAction[];
}
