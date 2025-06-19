import { Column, Entity, Index } from "typeorm";

@Index("IDX_invite_deleted_at", ["deletedAt"], {})
@Index("IDX_invite_email_unique", ["email"], { unique: true })
@Index("invite_pkey", ["id"], { unique: true })
@Index("IDX_invite_token", ["token"], {})
@Entity("invite", { schema: "public" })
export class Invite {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("boolean", { name: "accepted", default: () => "false" })
  accepted: boolean;

  @Column("text", { name: "token" })
  token: string;

  @Column("timestamp with time zone", { name: "expires_at" })
  expiresAt: Date;

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
