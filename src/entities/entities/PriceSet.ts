import { Column, Entity, Index, OneToMany } from "typeorm";
import { Price } from "./Price";

@Index("IDX_price_set_deleted_at", ["deletedAt"], {})
@Index("price_set_pkey", ["id"], { unique: true })
@Entity("price_set", { schema: "public" })
export class PriceSet {
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

  @OneToMany(() => Price, (price) => price.priceSet)
  prices: Price[];
}
