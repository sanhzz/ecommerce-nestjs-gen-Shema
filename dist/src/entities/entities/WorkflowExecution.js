"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowExecution = void 0;
const typeorm_1 = require("typeorm");
let WorkflowExecution = class WorkflowExecution {
    id;
    workflowId;
    transactionId;
    execution;
    context;
    state;
    createdAt;
    updatedAt;
    deletedAt;
    retentionTime;
    runId;
};
exports.WorkflowExecution = WorkflowExecution;
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id" }),
    __metadata("design:type", String)
], WorkflowExecution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "workflow_id" }),
    __metadata("design:type", String)
], WorkflowExecution.prototype, "workflowId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "transaction_id" }),
    __metadata("design:type", String)
], WorkflowExecution.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "execution", nullable: true }),
    __metadata("design:type", Object)
], WorkflowExecution.prototype, "execution", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "context", nullable: true }),
    __metadata("design:type", Object)
], WorkflowExecution.prototype, "context", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "state" }),
    __metadata("design:type", String)
], WorkflowExecution.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], WorkflowExecution.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], WorkflowExecution.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], WorkflowExecution.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "retention_time", nullable: true }),
    __metadata("design:type", Object)
], WorkflowExecution.prototype, "retentionTime", void 0);
__decorate([
    (0, typeorm_1.Column)("text", {
        primary: true,
        name: "run_id",
        default: () => "'01JXKS3FRAQ2XS3XVQJV0A0FVE'",
    }),
    __metadata("design:type", String)
], WorkflowExecution.prototype, "runId", void 0);
exports.WorkflowExecution = WorkflowExecution = __decorate([
    (0, typeorm_1.Index)("IDX_workflow_execution_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_workflow_execution_id", ["id"], {}),
    (0, typeorm_1.Index)("IDX_workflow_execution_workflow_id_transaction_id_run_id_unique", ["runId", "transactionId", "workflowId"], { unique: true }),
    (0, typeorm_1.Index)("workflow_execution_pkey", ["runId", "transactionId", "workflowId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_workflow_execution_state", ["state"], {}),
    (0, typeorm_1.Index)("IDX_workflow_execution_transaction_id", ["transactionId"], {}),
    (0, typeorm_1.Index)("IDX_workflow_execution_workflow_id", ["workflowId"], {}),
    (0, typeorm_1.Entity)("workflow_execution", { schema: "public" })
], WorkflowExecution);
//# sourceMappingURL=WorkflowExecution.js.map