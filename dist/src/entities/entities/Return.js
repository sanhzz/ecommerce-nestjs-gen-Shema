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
exports.Return = void 0;
const typeorm_1 = require("typeorm");
let Return = class Return {
    id;
    orderId;
    claimId;
    exchangeId;
    orderVersion;
    displayId;
    status;
    noNotification;
    refundAmount;
    rawRefundAmount;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    receivedAt;
    canceledAt;
    locationId;
    requestedAt;
    createdBy;
};
exports.Return = Return;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Return.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], Return.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "claim_id", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "claimId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "exchange_id", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "exchangeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "order_version" }),
    __metadata("design:type", Number)
], Return.prototype, "orderVersion", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "display_id" }),
    __metadata("design:type", Number)
], Return.prototype, "displayId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "status",
        enum: ["open", "requested", "received", "partially_received", "canceled"],
        default: () => "'open'",
    }),
    __metadata("design:type", String)
], Return.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "no_notification", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "noNotification", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "refund_amount", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "refundAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_refund_amount", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "rawRefundAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Return.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Return.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "received_at", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "receivedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "location_id", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "requested_at", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "requestedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], Return.prototype, "createdBy", void 0);
exports.Return = Return = __decorate([
    (0, typeorm_1.Index)("IDX_return_claim_id", ["claimId"], {}),
    (0, typeorm_1.Index)("IDX_return_display_id", ["displayId"], {}),
    (0, typeorm_1.Index)("IDX_return_exchange_id", ["exchangeId"], {}),
    (0, typeorm_1.Index)("return_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_return_order_id", ["orderId"], {}),
    (0, typeorm_1.Entity)("return", { schema: "public" })
], Return);
//# sourceMappingURL=Return.js.map