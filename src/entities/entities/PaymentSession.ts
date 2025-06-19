import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PaymentCollection } from "./PaymentCollection";

@Index("IDX_payment_session_deleted_at", ["deletedAt"], {})
@Index("payment_session_pkey", ["id"], { unique: true })
@Index("IDX_payment_session_payment_collection_id", ["paymentCollectionId"], {})
@Entity("payment_session", { schema: "public" })
export class PaymentSession {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("text", { name: "provider_id" })
  providerId: string;

  @Column("jsonb", { name: "data", default: {} })
  data: object;

  @Column("jsonb", { name: "context", nullable: true })
  context: object | null;

  @Column("text", { name: "status", default: () => "'pending'" })
  status: string;

  @Column("timestamp with time zone", { name: "authorized_at", nullable: true })
  authorizedAt: Date | null;

  @Column("text", { name: "payment_collection_id" })
  paymentCollectionId: string;

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

  @ManyToOne(
    () => PaymentCollection,
    (paymentCollection) => paymentCollection.paymentSessions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "payment_collection_id", referencedColumnName: "id" }])
  paymentCollection: PaymentCollection;
}
