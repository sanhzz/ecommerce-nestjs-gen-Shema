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
exports.PaymentCollection = void 0;
const typeorm_1 = require("typeorm");
const Payment_1 = require("./Payment");
const PaymentProvider_1 = require("./PaymentProvider");
const PaymentSession_1 = require("./PaymentSession");
let PaymentCollection = class PaymentCollection {
    id;
    currencyCode;
    amount;
    rawAmount;
    authorizedAmount;
    rawAuthorizedAmount;
    capturedAmount;
    rawCapturedAmount;
    refundedAmount;
    rawRefundedAmount;
    createdAt;
    updatedAt;
    deletedAt;
    completedAt;
    status;
    metadata;
    payments;
    paymentProviders;
    paymentSessions;
};
exports.PaymentCollection = PaymentCollection;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PaymentCollection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], PaymentCollection.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], PaymentCollection.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "authorized_amount", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "authorizedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_authorized_amount", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "rawAuthorizedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "captured_amount", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "capturedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_captured_amount", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "rawCapturedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "refunded_amount", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "refundedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_refunded_amount", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "rawRefundedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentCollection.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentCollection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "completed_at", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'not_paid'" }),
    __metadata("design:type", String)
], PaymentCollection.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], PaymentCollection.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Payment_1.Payment, (payment) => payment.paymentCollection),
    __metadata("design:type", Array)
], PaymentCollection.prototype, "payments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PaymentProvider_1.PaymentProvider, (paymentProvider) => paymentProvider.paymentCollections),
    (0, typeorm_1.JoinTable)({
        name: "payment_collection_payment_providers",
        joinColumns: [
            { name: "payment_collection_id", referencedColumnName: "id" },
        ],
        inverseJoinColumns: [
            { name: "payment_provider_id", referencedColumnName: "id" },
        ],
        schema: "public",
    }),
    __metadata("design:type", Array)
], PaymentCollection.prototype, "paymentProviders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PaymentSession_1.PaymentSession, (paymentSession) => paymentSession.paymentCollection),
    __metadata("design:type", Array)
], PaymentCollection.prototype, "paymentSessions", void 0);
exports.PaymentCollection = PaymentCollection = __decorate([
    (0, typeorm_1.Index)("IDX_payment_collection_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("payment_collection_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("payment_collection", { schema: "public" })
], PaymentCollection);
//# sourceMappingURL=PaymentCollection.js.map