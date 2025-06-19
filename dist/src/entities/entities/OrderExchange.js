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
exports.OrderExchange = void 0;
const typeorm_1 = require("typeorm");
let OrderExchange = class OrderExchange {
    id;
    orderId;
    returnId;
    orderVersion;
    displayId;
    noNotification;
    allowBackorder;
    differenceDue;
    rawDifferenceDue;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    canceledAt;
    createdBy;
};
exports.OrderExchange = OrderExchange;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderExchange.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderExchange.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "order_version" }),
    __metadata("design:type", Number)
], OrderExchange.prototype, "orderVersion", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "display_id" }),
    __metadata("design:type", Number)
], OrderExchange.prototype, "displayId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "no_notification", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "noNotification", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "allow_backorder", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderExchange.prototype, "allowBackorder", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "difference_due", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "differenceDue", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_difference_due", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "rawDifferenceDue", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderExchange.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderExchange.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], OrderExchange.prototype, "createdBy", void 0);
exports.OrderExchange = OrderExchange = __decorate([
    (0, typeorm_1.Index)("IDX_order_exchange_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_order_exchange_display_id", ["displayId"], {}),
    (0, typeorm_1.Index)("order_exchange_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_exchange_order_id", ["orderId"], {}),
    (0, typeorm_1.Index)("IDX_order_exchange_return_id", ["returnId"], {}),
    (0, typeorm_1.Entity)("order_exchange", { schema: "public" })
], OrderExchange);
//# sourceMappingURL=OrderExchange.js.map