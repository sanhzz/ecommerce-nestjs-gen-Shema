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
exports.OrderChangeAction = void 0;
const typeorm_1 = require("typeorm");
const OrderChange_1 = require("./OrderChange");
let OrderChangeAction = class OrderChangeAction {
    id;
    orderId;
    version;
    ordering;
    orderChangeId;
    reference;
    referenceId;
    action;
    details;
    amount;
    rawAmount;
    internalNote;
    applied;
    createdAt;
    updatedAt;
    deletedAt;
    returnId;
    claimId;
    exchangeId;
    orderChange;
};
exports.OrderChangeAction = OrderChangeAction;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderChangeAction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "ordering" }),
    __metadata("design:type", String)
], OrderChangeAction.prototype, "ordering", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_change_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "orderChangeId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "action" }),
    __metadata("design:type", String)
], OrderChangeAction.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "details", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "internal_note", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "internalNote", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "applied", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderChangeAction.prototype, "applied", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderChangeAction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderChangeAction.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "claim_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "claimId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "exchange_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChangeAction.prototype, "exchangeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderChange_1.OrderChange, (orderChange) => orderChange.orderChangeActions, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "order_change_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderChange_1.OrderChange)
], OrderChangeAction.prototype, "orderChange", void 0);
exports.OrderChangeAction = OrderChangeAction = __decorate([
    (0, typeorm_1.Index)("IDX_order_change_action_claim_id", ["claimId"], {}),
    (0, typeorm_1.Index)("IDX_order_change_action_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_order_change_action_exchange_id", ["exchangeId"], {}),
    (0, typeorm_1.Index)("order_change_action_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_change_action_order_change_id", ["orderChangeId"], {}),
    (0, typeorm_1.Index)("IDX_order_change_action_order_id", ["orderId"], {}),
    (0, typeorm_1.Index)("IDX_order_change_action_ordering", ["ordering"], {}),
    (0, typeorm_1.Index)("IDX_order_change_action_return_id", ["returnId"], {}),
    (0, typeorm_1.Entity)("order_change_action", { schema: "public" })
], OrderChangeAction);
//# sourceMappingURL=OrderChangeAction.js.map