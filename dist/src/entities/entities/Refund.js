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
exports.Refund = void 0;
const typeorm_1 = require("typeorm");
const Payment_1 = require("./Payment");
let Refund = class Refund {
    id;
    amount;
    rawAmount;
    paymentId;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    metadata;
    refundReasonId;
    note;
    payment;
};
exports.Refund = Refund;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Refund.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], Refund.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], Refund.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "payment_id" }),
    __metadata("design:type", String)
], Refund.prototype, "paymentId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Refund.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Refund.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Refund.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], Refund.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Refund.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "refund_reason_id", nullable: true }),
    __metadata("design:type", Object)
], Refund.prototype, "refundReasonId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "note", nullable: true }),
    __metadata("design:type", Object)
], Refund.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Payment_1.Payment, (payment) => payment.refunds, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "payment_id", referencedColumnName: "id" }]),
    __metadata("design:type", Payment_1.Payment)
], Refund.prototype, "payment", void 0);
exports.Refund = Refund = __decorate([
    (0, typeorm_1.Index)("IDX_refund_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("refund_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_refund_payment_id", ["paymentId"], {}),
    (0, typeorm_1.Index)("IDX_refund_refund_reason_id", ["refundReasonId"], {}),
    (0, typeorm_1.Entity)("refund", { schema: "public" })
], Refund);
//# sourceMappingURL=Refund.js.map