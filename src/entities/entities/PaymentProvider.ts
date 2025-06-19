import { Column, Entity, Index, ManyToMany } from "typeorm";
import { PaymentCollection } from "./PaymentCollection";

@Index("IDX_payment_provider_deleted_at", ["deletedAt"], {})
@Index("payment_provider_pkey", ["id"], { unique: true })
@Entity("payment_provider", { schema: "public" })
export class PaymentProvider {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("boolean", { name: "is_enabled", default: () => "true" })
  isEnabled: boolean;

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

  @ManyToMany(
    () => PaymentCollection,
    (paymentCollection) => paymentCollection.paymentProviders
  )
  paymentCollections: PaymentCollection[];
}
