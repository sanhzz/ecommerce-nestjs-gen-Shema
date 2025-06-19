import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fulfillment } from "./Fulfillment";
import { FulfillmentProvider } from "./FulfillmentProvider";
import { ServiceZone } from "./ServiceZone";
import { ShippingOptionType } from "./ShippingOptionType";
import { ShippingProfile } from "./ShippingProfile";
import { ShippingOptionRule } from "./ShippingOptionRule";

@Index("IDX_shipping_option_deleted_at", ["deletedAt"], {})
@Index("shipping_option_pkey", ["id"], { unique: true })
@Index("IDX_shipping_option_provider_id", ["providerId"], {})
@Index("IDX_shipping_option_service_zone_id", ["serviceZoneId"], {})
@Index("IDX_shipping_option_shipping_profile_id", ["shippingProfileId"], {})
@Entity("shipping_option", { schema: "public" })
export class ShippingOption {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "price_type", default: () => "'flat'" })
  priceType: string;

  @Column("text", { name: "service_zone_id" })
  serviceZoneId: string;

  @Column("text", { name: "shipping_profile_id", nullable: true })
  shippingProfileId: string | null;

  @Column("text", { name: "provider_id", nullable: true })
  providerId: string | null;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

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

  @OneToMany(() => Fulfillment, (fulfillment) => fulfillment.shippingOption)
  fulfillments: Fulfillment[];

  @ManyToOne(
    () => FulfillmentProvider,
    (fulfillmentProvider) => fulfillmentProvider.shippingOptions,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "provider_id", referencedColumnName: "id" }])
  provider: FulfillmentProvider;

  @ManyToOne(() => ServiceZone, (serviceZone) => serviceZone.shippingOptions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "service_zone_id", referencedColumnName: "id" }])
  serviceZone: ServiceZone;

  @ManyToOne(
    () => ShippingOptionType,
    (shippingOptionType) => shippingOptionType.shippingOptions,
    { onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_option_type_id", referencedColumnName: "id" }])
  shippingOptionType: ShippingOptionType;

  @ManyToOne(
    () => ShippingProfile,
    (shippingProfile) => shippingProfile.shippingOptions,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_profile_id", referencedColumnName: "id" }])
  shippingProfile: ShippingProfile;

  @OneToMany(
    () => ShippingOptionRule,
    (shippingOptionRule) => shippingOptionRule.shippingOption
  )
  shippingOptionRules: ShippingOptionRule[];
}
