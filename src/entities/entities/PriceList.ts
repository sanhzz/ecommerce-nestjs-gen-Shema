import { Column, Entity, Index, OneToMany } from "typeorm";
import { Price } from "./Price";
import { PriceListRule } from "./PriceListRule";

@Index("IDX_price_list_deleted_at", ["deletedAt"], {})
@Index("price_list_pkey", ["id"], { unique: true })
@Entity("price_list", { schema: "public" })
export class PriceList {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "status", default: () => "'draft'" })
  status: string;

  @Column("timestamp with time zone", { name: "starts_at", nullable: true })
  startsAt: Date | null;

  @Column("timestamp with time zone", { name: "ends_at", nullable: true })
  endsAt: Date | null;

  @Column("integer", {
    name: "rules_count",
    nullable: true,
    default: () => "0",
  })
  rulesCount: number | null;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("text", { name: "type", default: () => "'sale'" })
  type: string;

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

  @OneToMany(() => Price, (price) => price.priceList)
  prices: Price[];

  @OneToMany(() => PriceListRule, (priceListRule) => priceListRule.priceList)
  priceListRules: PriceListRule[];
}
