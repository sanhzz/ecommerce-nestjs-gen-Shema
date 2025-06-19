import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("script_migrations_pkey", ["id"], { unique: true })
@Index("idx_script_name_unique", ["scriptName"], { unique: true })
@Entity("script_migrations", { schema: "public" })
export class ScriptMigrations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "script_name", length: 255 })
  scriptName: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "finished_at", nullable: true })
  finishedAt: Date | null;
}
