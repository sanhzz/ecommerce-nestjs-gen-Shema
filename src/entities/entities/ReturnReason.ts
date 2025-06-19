import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Index("return_reason_pkey", ["id"], { unique: true })
@Index("IDX_return_reason_value", ["value"], { unique: true })
@Entity("return_reason", { schema: "public" })
export class ReturnReason {
  @Column("character varying", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "value" })
  value: string;

  @Column("character varying", { name: "label" })
  label: string;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

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

  @ManyToOne(() => ReturnReason, (returnReason) => returnReason.returnReasons)
  @JoinColumn([{ name: "parent_return_reason_id", referencedColumnName: "id" }])
  parentReturnReason: ReturnReason;

  @OneToMany(
    () => ReturnReason,
    (returnReason) => returnReason.parentReturnReason
  )
  returnReasons: ReturnReason[];
}
