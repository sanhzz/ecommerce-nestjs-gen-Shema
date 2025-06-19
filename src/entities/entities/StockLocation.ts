import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { StockLocationAddress } from "./StockLocationAddress";

@Index("IDX_stock_location_address_id_unique", ["addressId"], { unique: true })
@Index("IDX_stock_location_deleted_at", ["deletedAt"], {})
@Index("stock_location_pkey", ["id"], { unique: true })
@Entity("stock_location", { schema: "public" })
export class StockLocation {
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

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "address_id", nullable: true })
  addressId: string | null;

  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @OneToOne(
    () => StockLocationAddress,
    (stockLocationAddress) => stockLocationAddress.stockLocation,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "address_id", referencedColumnName: "id" }])
  address: StockLocationAddress;
}
