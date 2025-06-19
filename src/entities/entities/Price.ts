import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PriceList } from "./PriceList";
import { PriceSet } from "./PriceSet";
import { PriceRule } from "./PriceRule";

@Index("IDX_price_currency_code", ["currencyCode"], {})
@Index("IDX_price_deleted_at", ["deletedAt"], {})
@Index("price_pkey", ["id"], { unique: true })
@Index("IDX_price_price_list_id", ["priceListId"], {})
@Index("IDX_price_price_set_id", ["priceSetId"], {})
@Entity("price", { schema: "public" })
export class Price {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "title", nullable: true })
  title: string | null;

  @Column("text", { name: "price_set_id" })
  priceSetId: string;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

  @Column("integer", {
    name: "rules_count",
    nullable: true,
    default: () => "0",
  })
  rulesCount: number | null;

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

  @Column("text", { name: "price_list_id", nullable: true })
  priceListId: string | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("integer", { name: "min_quantity", nullable: true })
  minQuantity: number | null;

  @Column("integer", { name: "max_quantity", nullable: true })
  maxQuantity: number | null;

  @ManyToOne(() => PriceList, (priceList) => priceList.prices, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "price_list_id", referencedColumnName: "id" }])
  priceList: PriceList;

  @ManyToOne(() => PriceSet, (priceSet) => priceSet.prices, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "price_set_id", referencedColumnName: "id" }])
  priceSet: PriceSet;

  @OneToMany(() => PriceRule, (priceRule) => priceRule.price)
  priceRules: PriceRule[];
}
