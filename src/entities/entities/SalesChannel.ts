import { Column, Entity, Index } from "typeorm";

@Index("IDX_sales_channel_deleted_at", ["deletedAt"], {})
@Index("sales_channel_pkey", ["id"], { unique: true })
@Entity("sales_channel", { schema: "public" })
export class SalesChannel {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "is_disabled", default: () => "false" })
  isDisabled: boolean;

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
