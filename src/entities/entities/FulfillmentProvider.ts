import { Column, Entity, Index, OneToMany } from "typeorm";
import { Fulfillment } from "./Fulfillment";
import { ShippingOption } from "./ShippingOption";

@Index("IDX_fulfillment_provider_deleted_at", ["deletedAt"], {})
@Index("fulfillment_provider_pkey", ["id"], { unique: true })
@Entity("fulfillment_provider", { schema: "public" })
export class FulfillmentProvider {
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

  @OneToMany(() => Fulfillment, (fulfillment) => fulfillment.provider)
  fulfillments: Fulfillment[];

  @OneToMany(() => ShippingOption, (shippingOption) => shippingOption.provider)
  shippingOptions: ShippingOption[];
}
