import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cart } from "./Cart";

@Index("IDX_credit_line_cart_id", ["cartId"], {})
@Index("IDX_credit_line_deleted_at", ["deletedAt"], {})
@Index("credit_line_pkey", ["id"], { unique: true })
@Index(
  "IDX_cart_credit_line_reference_reference_id",
  ["reference", "referenceId"],
  {}
)
@Entity("credit_line", { schema: "public" })
export class CreditLine {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "cart_id" })
  cartId: string;

  @Column("text", { name: "reference", nullable: true })
  reference: string | null;

  @Column("text", { name: "reference_id", nullable: true })
  referenceId: string | null;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("jsonb", { name: "raw_amount" })
  rawAmount: object;

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

  @ManyToOne(() => Cart, (cart) => cart.creditLines, { onUpdate: "CASCADE" })
  @JoinColumn([{ name: "cart_id", referencedColumnName: "id" }])
  cart: Cart;
}
