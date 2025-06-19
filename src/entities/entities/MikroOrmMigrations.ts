import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mikro_orm_migrations_pkey", ["id"], { unique: true })
@Entity("mikro_orm_migrations", { schema: "public" })
export class MikroOrmMigrations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("timestamp with time zone", {
    name: "executed_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  executedAt: Date | null;
}
