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
exports.CreditLine = void 0;
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
let CreditLine = class CreditLine {
    id;
    cartId;
    reference;
    referenceId;
    amount;
    rawAmount;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    cart;
};
exports.CreditLine = CreditLine;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CreditLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "cart_id" }),
    __metadata("design:type", String)
], CreditLine.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference", nullable: true }),
    __metadata("design:type", Object)
], CreditLine.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference_id", nullable: true }),
    __metadata("design:type", Object)
], CreditLine.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], CreditLine.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], CreditLine.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CreditLine.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CreditLine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CreditLine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CreditLine.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cart_1.Cart, (cart) => cart.creditLines, { onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "cart_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cart_1.Cart)
], CreditLine.prototype, "cart", void 0);
exports.CreditLine = CreditLine = __decorate([
    (0, typeorm_1.Index)("IDX_credit_line_cart_id", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_credit_line_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("credit_line_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_cart_credit_line_reference_reference_id", ["reference", "referenceId"], {}),
    (0, typeorm_1.Entity)("credit_line", { schema: "public" })
], CreditLine);
//# sourceMappingURL=CreditLine.js.map