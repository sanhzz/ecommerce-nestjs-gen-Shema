import { Column, Entity, Index, OneToMany } from "typeorm";
import { StoreCurrency } from "./StoreCurrency";

@Index("IDX_store_deleted_at", ["deletedAt"], {})
@Index("store_pkey", ["id"], { unique: true })
@Entity("store", { schema: "public" })
export class Store {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name", default: () => "'Medusa Store'" })
  name: string;

  @Column("text", { name: "default_sales_channel_id", nullable: true })
  defaultSalesChannelId: string | null;

  @Column("text", { name: "default_region_id", nullable: true })
  defaultRegionId: string | null;

  @Column("text", { name: "default_location_id", nullable: true })
  defaultLocationId: string | null;

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

  @OneToMany(() => StoreCurrency, (storeCurrency) => storeCurrency.store)
  storeCurrencies: StoreCurrency[];
}
