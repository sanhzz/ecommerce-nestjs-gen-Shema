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
exports.OrderSummary = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
let OrderSummary = class OrderSummary {
    id;
    orderId;
    version;
    totals;
    createdAt;
    updatedAt;
    deletedAt;
    order;
};
exports.OrderSummary = OrderSummary;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderSummary.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderSummary.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version", default: () => "1" }),
    __metadata("design:type", Number)
], OrderSummary.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "totals", nullable: true }),
    __metadata("design:type", Object)
], OrderSummary.prototype, "totals", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderSummary.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderSummary.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderSummary.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderSummaries, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "id" }]),
    __metadata("design:type", Order_1.Order)
], OrderSummary.prototype, "order", void 0);
exports.OrderSummary = OrderSummary = __decorate([
    (0, typeorm_1.Index)("IDX_order_summary_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("order_summary_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_summary_order_id_version", ["orderId", "version"], {}),
    (0, typeorm_1.Entity)("order_summary", { schema: "public" })
], OrderSummary);
//# sourceMappingURL=OrderSummary.js.map