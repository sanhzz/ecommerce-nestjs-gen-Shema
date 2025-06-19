import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, Index } from 'typeorm';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
@Index("IDX_account_holder_deleted_at", ["deletedAt"], {})
@Index("IDX_account_holder_provider_id_external_id_unique", ["externalId", "providerId"], { unique: true })
@Index("account_holder_pkey", ["id"], { unique: true })
@Entity("account_holder", { schema: "public" })
export class AccountHolder {

  @Field(() => ID)
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Field(() => String)
  @Column("text", { name: "provider_id" })
  providerId: string;

  @Field(() => String)
  @Column("text", { name: "external_id" })
  externalId: string;

  @Field(() => String, { nullable: true }) // ✅ Explicit type for nullable
  @Column("text", { name: "email", nullable: true })
  email: string | null;

  @Field(() => GraphQLJSON)
  @Column("jsonb", { name: "data", default: {} })
  data: object;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column("jsonb", { name: "metadata", nullable: true })
  metadata: object | null;

  @Field(() => Date)
  @Column("timestamp with time zone", { name: "created_at", default: () => "now()" })
  createdAt: Date;

  @Field(() => Date)
  @Column("timestamp with time zone", { name: "updated_at", default: () => "now()" })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
