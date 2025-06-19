import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AuthIdentity } from "./AuthIdentity";

@Index("IDX_provider_identity_auth_identity_id", ["authIdentityId"], {})
@Index("IDX_provider_identity_deleted_at", ["deletedAt"], {})
@Index("IDX_provider_identity_provider_entity_id", ["entityId", "provider"], {
  unique: true,
})
@Index("provider_identity_pkey", ["id"], { unique: true })
@Entity("provider_identity", { schema: "public" })
export class ProviderIdentity {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "entity_id" })
  entityId: string;

  @Column("text", { name: "provider" })
  provider: string;

  @Column("text", { name: "auth_identity_id" })
  authIdentityId: string;

  @Column("jsonb", { name: "user_metadata", nullable: true })
  userMetadata: object | null;

  @Column("jsonb", { name: "provider_metadata", nullable: true })
  providerMetadata: object | null;

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

  @ManyToOne(
    () => AuthIdentity,
    (authIdentity) => authIdentity.providerIdentities,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "auth_identity_id", referencedColumnName: "id" }])
  authIdentity: AuthIdentity;
}
