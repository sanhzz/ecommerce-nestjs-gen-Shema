import { Column, Entity, Index, OneToOne } from "typeorm";
import { StockLocation } from "./StockLocation";

@Index("IDX_stock_location_address_deleted_at", ["deletedAt"], {})
@Index("stock_location_address_pkey", ["id"], { unique: true })
@Entity("stock_location_address", { schema: "public" })
export class StockLocationAddress {
  @Column("text", { primary: true, name: "id" })
  id: string;

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

  @Column("text", { name: "address_1" })
  address_1: string;

  @Column("text", { name: "address_2", nullable: true })
  address_2: string | null;

  @Column("text", { name: "company", nullable: true })
  company: string | null;

  @Column("text", { name: "city", nullable: true })
  city: string | null;

  @Column("text", { name: "country_code" })
  countryCode: string;

  @Column("text", { name: "phone", nullable: true })
  phone: string | null;

  @Column("text", { name: "province", nullable: true })
  province: string | null;

  @Column("text", { name: "postal_code", nullable: true })
  postalCode: string | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @OneToOne(() => StockLocation, (stockLocation) => stockLocation.address)
  stockLocation: StockLocation;
}
