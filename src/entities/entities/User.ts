import { Column, Entity, Index } from "typeorm";

@Index("IDX_user_deleted_at", ["deletedAt"], {})
@Index("IDX_user_email_unique", ["email"], { unique: true })
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "first_name", nullable: true })
  firstName: string | null;

  @Column("text", { name: "last_name", nullable: true })
  lastName: string | null;

  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "avatar_url", nullable: true })
  avatarUrl: string | null;

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
