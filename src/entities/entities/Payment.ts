import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Capture } from "./Capture";
import { PaymentCollection } from "./PaymentCollection";
import { Refund } from "./Refund";

@Index("IDX_payment_deleted_at", ["deletedAt"], {})
@Index("payment_pkey", ["id"], { unique: true })
@Index("IDX_payment_payment_collection_id", ["paymentCollectionId"], {})
@Index("IDX_payment_payment_session_id_unique", ["paymentSessionId"], {
  unique: true,
})
@Index("IDX_payment_payment_session_id", ["paymentSessionId"], {})
@Index("IDX_payment_provider_id", ["providerId"], {})
@Entity("payment", { schema: "public" })
export class Payment {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("text", { name: "provider_id" })
  providerId: string;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

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

  @Column("timestamp with time zone", { name: "captured_at", nullable: true })
  capturedAt: Date | null;

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

  @Column("text", { name: "payment_collection_id" })
  paymentCollectionId: string;

  @Column("text", { name: "payment_session_id" })
  paymentSessionId: string;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @OneToMany(() => Capture, (capture) => capture.payment)
  captures: Capture[];

  @ManyToOne(
    () => PaymentCollection,
    (paymentCollection) => paymentCollection.payments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "payment_collection_id", referencedColumnName: "id" }])
  paymentCollection: PaymentCollection;

  @OneToMany(() => Refund, (refund) => refund.payment)
  refunds: Refund[];
}
