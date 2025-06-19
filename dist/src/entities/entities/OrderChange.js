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
exports.OrderChange = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const OrderChangeAction_1 = require("./OrderChangeAction");
let OrderChange = class OrderChange {
    id;
    orderId;
    version;
    description;
    status;
    internalNote;
    createdBy;
    requestedBy;
    requestedAt;
    confirmedBy;
    confirmedAt;
    declinedBy;
    declinedReason;
    metadata;
    declinedAt;
    canceledBy;
    canceledAt;
    createdAt;
    updatedAt;
    changeType;
    deletedAt;
    returnId;
    claimId;
    exchangeId;
    order;
    orderChangeActions;
};
exports.OrderChange = OrderChange;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderChange.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderChange.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], OrderChange.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'pending'" }),
    __metadata("design:type", String)
], OrderChange.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "internal_note", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "internalNote", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "requested_by", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "requestedBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "requested_at", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "requestedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "confirmed_by", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "confirmedBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "confirmed_at", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "confirmedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "declined_by", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "declinedBy", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "declined_reason", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "declinedReason", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "declined_at", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "declinedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "canceled_by", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "canceledBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderChange.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderChange.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "change_type", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "changeType", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "claim_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "claimId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "exchange_id", nullable: true }),
    __metadata("design:type", Object)
], OrderChange.prototype, "exchangeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderChanges, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "id" }]),
    __metadata("design:type", Order_1.Order)
], OrderChange.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderChangeAction_1.OrderChangeAction, (orderChangeAction) => orderChangeAction.orderChange),
    __metadata("design:type", Array)
], OrderChange.prototype, "orderChangeActions", void 0);
exports.OrderChange = OrderChange = __decorate([
    (0, typeorm_1.Index)("IDX_order_change_change_type", ["changeType"], {}),
    (0, typeorm_1.Index)("IDX_order_change_claim_id", ["claimId"], {}),
    (0, typeorm_1.Index)("IDX_order_change_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_order_change_exchange_id", ["exchangeId"], {}),
    (0, typeorm_1.Index)("order_change_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_change_order_id", ["orderId"], {}),
    (0, typeorm_1.Index)("IDX_order_change_order_id_version", ["orderId", "version"], {}),
    (0, typeorm_1.Index)("IDX_order_change_return_id", ["returnId"], {}),
    (0, typeorm_1.Index)("IDX_order_change_status", ["status"], {}),
    (0, typeorm_1.Entity)("order_change", { schema: "public" })
], OrderChange);
//# sourceMappingURL=OrderChange.js.map