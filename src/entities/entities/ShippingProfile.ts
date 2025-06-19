import { Column, Entity, Index, OneToMany } from "typeorm";
import { ShippingOption } from "./ShippingOption";

@Index("IDX_shipping_profile_deleted_at", ["deletedAt"], {})
@Index("shipping_profile_pkey", ["id"], { unique: true })
@Index("IDX_shipping_profile_name_unique", ["name"], { unique: true })
@Entity("shipping_profile", { schema: "public" })
export class ShippingProfile {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "type" })
  type: string;

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

  @OneToMany(
    () => ShippingOption,
    (shippingOption) => shippingOption.shippingProfile
  )
  shippingOptions: ShippingOption[];
}
