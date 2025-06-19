import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fulfillment } from "./Fulfillment";

@Index("IDX_fulfillment_label_deleted_at", ["deletedAt"], {})
@Index("IDX_fulfillment_label_fulfillment_id", ["fulfillmentId"], {})
@Index("fulfillment_label_pkey", ["id"], { unique: true })
@Entity("fulfillment_label", { schema: "public" })
export class FulfillmentLabel {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "tracking_number" })
  trackingNumber: string;

  @Column("text", { name: "tracking_url" })
  trackingUrl: string;

  @Column("text", { name: "label_url" })
  labelUrl: string;

  @Column("text", { name: "fulfillment_id" })
  fulfillmentId: string;

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
    () => Fulfillment,
    (fulfillment) => fulfillment.fulfillmentLabels,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "fulfillment_id", referencedColumnName: "id" }])
  fulfillment: Fulfillment;
}
