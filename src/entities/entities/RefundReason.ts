import { Column, Entity, Index } from "typeorm";

@Index("IDX_refund_reason_deleted_at", ["deletedAt"], {})
@Index("refund_reason_pkey", ["id"], { unique: true })
@Entity("refund_reason", { schema: "public" })
export class RefundReason {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "label" })
  label: string;

  @Column("text", { name: "description", nullable: true })
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
}
