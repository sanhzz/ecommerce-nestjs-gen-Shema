import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PriceList } from "./PriceList";

@Index("IDX_price_list_rule_attribute", ["attribute"], {})
@Index("IDX_price_list_rule_deleted_at", ["deletedAt"], {})
@Index("price_list_rule_pkey", ["id"], { unique: true })
@Index("IDX_price_list_rule_price_list_id", ["priceListId"], {})
@Entity("price_list_rule", { schema: "public" })
export class PriceListRule {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "price_list_id" })
  priceListId: string;

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

  @Column("jsonb", { name: "value", nullable: true })
  value: object | null;

  @Column("text", { name: "attribute", default: () => "''" })
  attribute: string;

  @ManyToOne(() => PriceList, (priceList) => priceList.priceListRules, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "price_list_id", referencedColumnName: "id" }])
  priceList: PriceList;
}
