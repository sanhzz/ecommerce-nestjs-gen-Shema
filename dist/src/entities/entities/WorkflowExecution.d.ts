export declare class WorkflowExecution {
    id: string;
    workflowId: string;
    transactionId: string;
    execution: object | null;
    context: object | null;
    state: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    retentionTime: number | null;
    runId: string;
}
