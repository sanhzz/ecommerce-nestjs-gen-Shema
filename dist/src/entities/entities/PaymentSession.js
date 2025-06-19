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
exports.PaymentSession = void 0;
const typeorm_1 = require("typeorm");
const PaymentCollection_1 = require("./PaymentCollection");
let PaymentSession = class PaymentSession {
    id;
    currencyCode;
    amount;
    rawAmount;
    providerId;
    data;
    context;
    status;
    authorizedAt;
    paymentCollectionId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    paymentCollection;
};
exports.PaymentSession = PaymentSession;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PaymentSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], PaymentSession.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], PaymentSession.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], PaymentSession.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id" }),
    __metadata("design:type", String)
], PaymentSession.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", default: {} }),
    __metadata("design:type", Object)
], PaymentSession.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "context", nullable: true }),
    __metadata("design:type", Object)
], PaymentSession.prototype, "context", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'pending'" }),
    __metadata("design:type", String)
], PaymentSession.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "authorized_at", nullable: true }),
    __metadata("design:type", Object)
], PaymentSession.prototype, "authorizedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "payment_collection_id" }),
    __metadata("design:type", String)
], PaymentSession.prototype, "paymentCollectionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], PaymentSession.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentSession.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentSession.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PaymentSession.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PaymentCollection_1.PaymentCollection, (paymentCollection) => paymentCollection.paymentSessions, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "payment_collection_id", referencedColumnName: "id" }]),
    __metadata("design:type", PaymentCollection_1.PaymentCollection)
], PaymentSession.prototype, "paymentCollection", void 0);
exports.PaymentSession = PaymentSession = __decorate([
    (0, typeorm_1.Index)("IDX_payment_session_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("payment_session_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_payment_session_payment_collection_id", ["paymentCollectionId"], {}),
    (0, typeorm_1.Entity)("payment_session", { schema: "public" })
], PaymentSession);
//# sourceMappingURL=PaymentSession.js.map