import { Column, Entity, Index } from "typeorm";

@Index("currency_pkey", ["code"], { unique: true })
@Entity("currency", { schema: "public" })
export class Currency {
  @Column("text", { primary: true, name: "code" })
  code: string;

  @Column("text", { name: "symbol" })
  symbol: string;

  @Column("text", { name: "symbol_native" })
  symbolNative: string;

  @Column("integer", { name: "decimal_digits", default: () => "0" })
  decimalDigits: number;

  @Column("numeric", { name: "rounding", default: () => "0" })
  rounding: string;

  @Column("jsonb", { name: "raw_rounding" })
  rawRounding: object;

  @Column("text", { name: "name" })
  name: string;

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
}
