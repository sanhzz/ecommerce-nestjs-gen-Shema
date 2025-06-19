import { Column, Entity, Index, OneToMany } from "typeorm";
import { ProviderIdentity } from "./ProviderIdentity";

@Index("IDX_auth_identity_deleted_at", ["deletedAt"], {})
@Index("auth_identity_pkey", ["id"], { unique: true })
@Entity("auth_identity", { schema: "public" })
export class AuthIdentity {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("jsonb", { name: "app_metadata", nullable: true })
  appMetadata: object | null;

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

  @OneToMany(
    () => ProviderIdentity,
    (providerIdentity) => providerIdentity.authIdentity
  )
  providerIdentities: ProviderIdentity[];
}
