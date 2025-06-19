import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("link_module_migrations_pkey", ["id"], { unique: true })
@Index("link_module_migrations_table_name_key", ["tableName"], { unique: true })
@Entity("link_module_migrations", { schema: "public" })
export class LinkModuleMigrations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "table_name",
    unique: true,
    length: 255,
  })
  tableName: string;

  @Column("jsonb", { name: "link_descriptor", default: {} })
  linkDescriptor: object;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
