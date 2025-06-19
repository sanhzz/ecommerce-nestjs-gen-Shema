import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FulfillmentAddress } from "./FulfillmentAddress";
import { FulfillmentProvider } from "./FulfillmentProvider";
import { ShippingOption } from "./ShippingOption";
import { FulfillmentItem } from "./FulfillmentItem";
import { FulfillmentLabel } from "./FulfillmentLabel";

@Index("IDX_fulfillment_deleted_at", ["deletedAt"], {})
@Index("fulfillment_pkey", ["id"], { unique: true })
@Index("IDX_fulfillment_location_id", ["locationId"], {})
@Index("IDX_fulfillment_shipping_option_id", ["shippingOptionId"], {})
@Entity("fulfillment", { schema: "public" })
export class Fulfillment {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "location_id" })
  locationId: string;

  @Column("timestamp with time zone", { name: "packed_at", nullable: true })
  packedAt: Date | null;

  @Column("timestamp with time zone", { name: "shipped_at", nullable: true })
  shippedAt: Date | null;

  @Column("timestamp with time zone", { name: "delivered_at", nullable: true })
  deliveredAt: Date | null;

  @Column("timestamp with time zone", { name: "canceled_at", nullable: true })
  canceledAt: Date | null;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("text", { name: "shipping_option_id", nullable: true })
  shippingOptionId: string | null;

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

  @Column("text", { name: "marked_shipped_by", nullable: true })
  markedShippedBy: string | null;

  @Column("text", { name: "created_by", nullable: true })
  createdBy: string | null;

  @Column("boolean", { name: "requires_shipping", default: () => "true" })
  requiresShipping: boolean;

  @ManyToOne(
    () => FulfillmentAddress,
    (fulfillmentAddress) => fulfillmentAddress.fulfillments,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "delivery_address_id", referencedColumnName: "id" }])
  deliveryAddress: FulfillmentAddress;

  @ManyToOne(
    () => FulfillmentProvider,
    (fulfillmentProvider) => fulfillmentProvider.fulfillments,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "provider_id", referencedColumnName: "id" }])
  provider: FulfillmentProvider;

  @ManyToOne(
    () => ShippingOption,
    (shippingOption) => shippingOption.fulfillments,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_option_id", referencedColumnName: "id" }])
  shippingOption: ShippingOption;

  @OneToMany(
    () => FulfillmentItem,
    (fulfillmentItem) => fulfillmentItem.fulfillment
  )
  fulfillmentItems: FulfillmentItem[];

  @OneToMany(
    () => FulfillmentLabel,
    (fulfillmentLabel) => fulfillmentLabel.fulfillment
  )
  fulfillmentLabels: FulfillmentLabel[];
}
