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
exports.Payment = void 0;
const typeorm_1 = require("typeorm");
const Capture_1 = require("./Capture");
const PaymentCollection_1 = require("./PaymentCollection");
const Refund_1 = require("./Refund");
let Payment = class Payment {
    id;
    amount;
    rawAmount;
    currencyCode;
    providerId;
    data;
    createdAt;
    updatedAt;
    deletedAt;
    capturedAt;
    canceledAt;
    paymentCollectionId;
    paymentSessionId;
    metadata;
    captures;
    paymentCollection;
    refunds;
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], Payment.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], Payment.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id" }),
    __metadata("design:type", String)
], Payment.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "captured_at", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "capturedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "payment_collection_id" }),
    __metadata("design:type", String)
], Payment.prototype, "paymentCollectionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "payment_session_id" }),
    __metadata("design:type", String)
], Payment.prototype, "paymentSessionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Capture_1.Capture, (capture) => capture.payment),
    __metadata("design:type", Array)
], Payment.prototype, "captures", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PaymentCollection_1.PaymentCollection, (paymentCollection) => paymentCollection.payments, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "payment_collection_id", referencedColumnName: "id" }]),
    __metadata("design:type", PaymentCollection_1.PaymentCollection)
], Payment.prototype, "paymentCollection", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Refund_1.Refund, (refund) => refund.payment),
    __metadata("design:type", Array)
], Payment.prototype, "refunds", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Index)("IDX_payment_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("payment_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_payment_payment_collection_id", ["paymentCollectionId"], {}),
    (0, typeorm_1.Index)("IDX_payment_payment_session_id_unique", ["paymentSessionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_payment_payment_session_id", ["paymentSessionId"], {}),
    (0, typeorm_1.Index)("IDX_payment_provider_id", ["providerId"], {}),
    (0, typeorm_1.Entity)("payment", { schema: "public" })
], Payment);
//# sourceMappingURL=Payment.js.map