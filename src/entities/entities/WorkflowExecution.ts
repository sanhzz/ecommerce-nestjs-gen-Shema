import { Column, Entity, Index } from "typeorm";

@Index("IDX_workflow_execution_deleted_at", ["deletedAt"], {})
@Index("IDX_workflow_execution_id", ["id"], {})
@Index(
  "IDX_workflow_execution_workflow_id_transaction_id_run_id_unique",
  ["runId", "transactionId", "workflowId"],
  { unique: true }
)
@Index("workflow_execution_pkey", ["runId", "transactionId", "workflowId"], {
  unique: true,
})
@Index("IDX_workflow_execution_state", ["state"], {})
@Index("IDX_workflow_execution_transaction_id", ["transactionId"], {})
@Index("IDX_workflow_execution_workflow_id", ["workflowId"], {})
@Entity("workflow_execution", { schema: "public" })
export class WorkflowExecution {
  @Column("character varying", { name: "id" })
  id: string;

  @Column("character varying", { primary: true, name: "workflow_id" })
  workflowId: string;

  @Column("character varying", { primary: true, name: "transaction_id" })
  transactionId: string;

  @Column("jsonb", { name: "execution", nullable: true })
  execution: object | null;

  @Column("jsonb", { name: "context", nullable: true })
  context: object | null;

  @Column("character varying", { name: "state" })
  state: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "retention_time", nullable: true })
  retentionTime: number | null;

  @Column("text", {
    primary: true,
    name: "run_id",
    default: () => "'01JXKS3FRAQ2XS3XVQJV0A0FVE'",
  })
  runId: string;
}
