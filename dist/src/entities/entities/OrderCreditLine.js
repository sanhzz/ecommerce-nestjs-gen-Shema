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
exports.OrderCreditLine = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
let OrderCreditLine = class OrderCreditLine {
    id;
    orderId;
    reference;
    referenceId;
    amount;
    rawAmount;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    order;
};
exports.OrderCreditLine = OrderCreditLine;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderCreditLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderCreditLine.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference", nullable: true }),
    __metadata("design:type", Object)
], OrderCreditLine.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference_id", nullable: true }),
    __metadata("design:type", Object)
], OrderCreditLine.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], OrderCreditLine.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], OrderCreditLine.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderCreditLine.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderCreditLine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderCreditLine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderCreditLine.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderCreditLines, {
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "id" }]),
    __metadata("design:type", Order_1.Order)
], OrderCreditLine.prototype, "order", void 0);
exports.OrderCreditLine = OrderCreditLine = __decorate([
    (0, typeorm_1.Index)("IDX_order_credit_line_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("order_credit_line_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_credit_line_order_id", ["orderId"], {}),
    (0, typeorm_1.Entity)("order_credit_line", { schema: "public" })
], OrderCreditLine);
//# sourceMappingURL=OrderCreditLine.js.map