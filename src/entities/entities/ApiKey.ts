import { Column, Entity, Index } from "typeorm";

@Index("IDX_api_key_deleted_at", ["deletedAt"], {})
@Index("api_key_pkey", ["id"], { unique: true })
@Index("IDX_api_key_token_unique", ["token"], { unique: true })
@Index("IDX_api_key_type", ["type"], {})
@Entity("api_key", { schema: "public" })
export class ApiKey {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "token" })
  token: string;

  @Column("text", { name: "salt" })
  salt: string;

  @Column("text", { name: "redacted" })
  redacted: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "type" })
  type: string;

  @Column("timestamp with time zone", { name: "last_used_at", nullable: true })
  lastUsedAt: Date | null;

  @Column("text", { name: "created_by" })
  createdBy: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("text", { name: "revoked_by", nullable: true })
  revokedBy: string | null;

  @Column("timestamp with time zone", { name: "revoked_at", nullable: true })
  revokedAt: Date | null;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
