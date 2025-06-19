import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Payment } from "./Payment";

@Index("IDX_refund_deleted_at", ["deletedAt"], {})
@Index("refund_pkey", ["id"], { unique: true })
@Index("IDX_refund_payment_id", ["paymentId"], {})
@Index("IDX_refund_refund_reason_id", ["refundReasonId"], {})
@Entity("refund", { schema: "public" })
export class Refund {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("text", { name: "payment_id" })
  paymentId: string;

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

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Column("text", { name: "refund_reason_id", nullable: true })
  refundReasonId: string | null;

  @Column("text", { name: "note", nullable: true })
  note: string | null;

  @ManyToOne(() => Payment, (payment) => payment.refunds, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "payment_id", referencedColumnName: "id" }])
  payment: Payment;
}
