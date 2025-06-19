import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_return_claim_id", ["claimId"], {})
@Index("IDX_return_display_id", ["displayId"], {})
@Index("IDX_return_exchange_id", ["exchangeId"], {})
@Index("return_pkey", ["id"], { unique: true })
@Index("IDX_return_order_id", ["orderId"], {})
@Entity("return", { schema: "public" })
export class Return {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("text", { name: "claim_id", nullable: true })
  claimId: string | null;

  @Column("text", { name: "exchange_id", nullable: true })
  exchangeId: string | null;

  @Column("integer", { name: "order_version" })
  orderVersion: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "display_id" })
  displayId: number;

  @Column("enum", {
    name: "status",
    enum: ["open", "requested", "received", "partially_received", "canceled"],
    default: () => "'open'",
  })
  status: "open" | "requested" | "received" | "partially_received" | "canceled";

  @Column("boolean", { name: "no_notification", nullable: true })
  noNotification: boolean | null;

  @Column("numeric", { name: "refund_amount", nullable: true })
  refundAmount: string | null;

  @Column("jsonb", { name: "raw_refund_amount", nullable: true })
  rawRefundAmount: object | null;

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

  @Column("timestamp with time zone", { name: "received_at", nullable: true })
  receivedAt: Date | null;

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

  @Column("text", { name: "location_id", nullable: true })
  locationId: string | null;

  @Column("timestamp with time zone", { name: "requested_at", nullable: true })
  requestedAt: Date | null;

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;
}
