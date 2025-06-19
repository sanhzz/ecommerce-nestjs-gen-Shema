import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Store } from "./Store";

@Index("IDX_store_currency_deleted_at", ["deletedAt"], {})
@Index("store_currency_pkey", ["id"], { unique: true })
@Index("IDX_store_currency_store_id", ["storeId"], {})
@Entity("store_currency", { schema: "public" })
export class StoreCurrency {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "currency_code" })
  currencyCode: string;

  @Column("boolean", { name: "is_default", default: () => "false" })
  isDefault: boolean;

  @Column("text", { name: "store_id", nullable: true })
  storeId: string | null;

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

  @ManyToOne(() => Store, (store) => store.storeCurrencies, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "store_id", referencedColumnName: "id" }])
  store: Store;
}
