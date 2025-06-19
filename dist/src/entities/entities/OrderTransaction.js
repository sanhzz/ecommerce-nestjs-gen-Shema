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
exports.OrderTransaction = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
let OrderTransaction = class OrderTransaction {
    id;
    orderId;
    version;
    amount;
    rawAmount;
    currencyCode;
    reference;
    referenceId;
    createdAt;
    updatedAt;
    deletedAt;
    returnId;
    claimId;
    exchangeId;
    order;
};
exports.OrderTransaction = OrderTransaction;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderTransaction.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version", default: () => "1" }),
    __metadata("design:type", Number)
], OrderTransaction.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], OrderTransaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], OrderTransaction.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference", nullable: true }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference_id", nullable: true }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderTransaction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderTransaction.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id", nullable: true }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "claim_id", nullable: true }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "claimId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "exchange_id", nullable: true }),
    __metadata("design:type", Object)
], OrderTransaction.prototype, "exchangeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderTransactions, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "id" }]),
    __metadata("design:type", Order_1.Order)
], OrderTransaction.prototype, "order", void 0);
exports.OrderTransaction = OrderTransaction = __decorate([
    (0, typeorm_1.Index)("IDX_order_transaction_claim_id", ["claimId"], {}),
    (0, typeorm_1.Index)("IDX_order_transaction_currency_code", ["currencyCode"], {}),
    (0, typeorm_1.Index)("IDX_order_transaction_exchange_id", ["exchangeId"], {}),
    (0, typeorm_1.Index)("order_transaction_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_transaction_order_id_version", ["orderId", "version"], {}),
    (0, typeorm_1.Index)("IDX_order_transaction_reference_id", ["referenceId"], {}),
    (0, typeorm_1.Index)("IDX_order_transaction_return_id", ["returnId"], {}),
    (0, typeorm_1.Entity)("order_transaction", { schema: "public" })
], OrderTransaction);
//# sourceMappingURL=OrderTransaction.js.map