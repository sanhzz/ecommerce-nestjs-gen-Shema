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
exports.OrderClaim = void 0;
const typeorm_1 = require("typeorm");
let OrderClaim = class OrderClaim {
    id;
    orderId;
    returnId;
    orderVersion;
    displayId;
    type;
    noNotification;
    refundAmount;
    rawRefundAmount;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    canceledAt;
    createdBy;
};
exports.OrderClaim = OrderClaim;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderClaim.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderClaim.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "order_version" }),
    __metadata("design:type", Number)
], OrderClaim.prototype, "orderVersion", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "display_id" }),
    __metadata("design:type", Number)
], OrderClaim.prototype, "displayId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "type", enum: ["refund", "replace"] }),
    __metadata("design:type", String)
], OrderClaim.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "no_notification", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "noNotification", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "refund_amount", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "refundAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_refund_amount", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "rawRefundAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderClaim.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderClaim.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], OrderClaim.prototype, "createdBy", void 0);
exports.OrderClaim = OrderClaim = __decorate([
    (0, typeorm_1.Index)("IDX_order_claim_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_order_claim_display_id", ["displayId"], {}),
    (0, typeorm_1.Index)("order_claim_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_claim_order_id", ["orderId"], {}),
    (0, typeorm_1.Index)("IDX_order_claim_return_id", ["returnId"], {}),
    (0, typeorm_1.Entity)("order_claim", { schema: "public" })
], OrderClaim);
//# sourceMappingURL=OrderClaim.js.map