import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_1c934dab0", ["deletedAt"], {})
@Index("IDX_id_1c934dab0", ["id"], {})
@Index("IDX_payment_provider_id_1c934dab0", ["paymentProviderId"], {})
@Index("region_payment_provider_pkey", ["paymentProviderId", "regionId"], {
  unique: true,
})
@Index("IDX_region_id_1c934dab0", ["regionId"], {})
@Entity("region_payment_provider", { schema: "public" })
export class RegionPaymentProvider {
  @Column("character varying", {
    primary: true,
    name: "region_id",
    length: 255,
  })
  regionId: string;

  @Column("character varying", {
    primary: true,
    name: "payment_provider_id",
    length: 255,
  })
  paymentProviderId: string;

  @Column("character varying", { name: "id", length: 255 })
  id: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
