import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Payment } from "./Payment";
import { PaymentProvider } from "./PaymentProvider";
import { PaymentSession } from "./PaymentSession";

@Index("IDX_payment_collection_deleted_at", ["deletedAt"], {})
@Index("payment_collection_pkey", ["id"], { unique: true })
@Entity("payment_collection", { schema: "public" })
export class PaymentCollection {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("numeric", { name: "authorized_amount", nullable: true })
  authorizedAmount: string | null;

  @Column("jsonb", { name: "raw_authorized_amount", nullable: true })
  rawAuthorizedAmount: object | null;

  @Column("numeric", { name: "captured_amount", nullable: true })
  capturedAmount: string | null;

  @Column("jsonb", { name: "raw_captured_amount", nullable: true })
  rawCapturedAmount: object | null;

  @Column("numeric", { name: "refunded_amount", nullable: true })
  refundedAmount: string | null;

  @Column("jsonb", { name: "raw_refunded_amount", nullable: true })
  rawRefundedAmount: object | null;

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

  @Column("timestamp with time zone", { name: "completed_at", nullable: true })
  completedAt: Date | null;

  @Column("text", { name: "status", default: () => "'not_paid'" })
  status: string;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @OneToMany(() => Payment, (payment) => payment.paymentCollection)
  payments: Payment[];

  @ManyToMany(
    () => PaymentProvider,
    (paymentProvider) => paymentProvider.paymentCollections
  )
  @JoinTable({
    name: "payment_collection_payment_providers",
    joinColumns: [
      { name: "payment_collection_id", referencedColumnName: "id" },
    ],
    inverseJoinColumns: [
      { name: "payment_provider_id", referencedColumnName: "id" },
    ],
    schema: "public",
  })
  paymentProviders: PaymentProvider[];

  @OneToMany(
    () => PaymentSession,
    (paymentSession) => paymentSession.paymentCollection
  )
  paymentSessions: PaymentSession[];
}
