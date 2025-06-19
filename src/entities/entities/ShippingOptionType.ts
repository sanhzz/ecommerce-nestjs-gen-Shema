import { Column, Entity, Index, OneToMany } from "typeorm";
import { ShippingOption } from "./ShippingOption";

@Index("IDX_shipping_option_type_deleted_at", ["deletedAt"], {})
@Index("shipping_option_type_pkey", ["id"], { unique: true })
@Entity("shipping_option_type", { schema: "public" })
export class ShippingOptionType {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "label" })
  label: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "code" })
  code: string;

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
    (shippingOption) => shippingOption.shippingOptionType
  )
  shippingOptions: ShippingOption[];
}
