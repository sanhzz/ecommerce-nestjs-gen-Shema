import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_order_claim_deleted_at", ["deletedAt"], {})
@Index("IDX_order_claim_display_id", ["displayId"], {})
@Index("order_claim_pkey", ["id"], { unique: true })
@Index("IDX_order_claim_order_id", ["orderId"], {})
@Index("IDX_order_claim_return_id", ["returnId"], {})
@Entity("order_claim", { schema: "public" })
export class OrderClaim {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "order_id" })
  orderId: string;

  @Column("text", { name: "return_id", nullable: true })
  returnId: string | null;

  @Column("integer", { name: "order_version" })
  orderVersion: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "display_id" })
  displayId: number;

  @Column("enum", { name: "type", enum: ["refund", "replace"] })
  type: "refund" | "replace";

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

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;
}
