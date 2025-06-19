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
exports.PaymentProvider = void 0;
const typeorm_1 = require("typeorm");
const PaymentCollection_1 = require("./PaymentCollection");
let PaymentProvider = class PaymentProvider {
    id;
    isEnabled;
    createdAt;
    updatedAt;
    deletedAt;
    paymentCollections;
};
exports.PaymentProvider = PaymentProvider;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PaymentProvider.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_enabled", default: () => "true" }),
    __metadata("design:type", Boolean)
], PaymentProvider.prototype, "isEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentProvider.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentProvider.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PaymentProvider.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PaymentCollection_1.PaymentCollection, (paymentCollection) => paymentCollection.paymentProviders),
    __metadata("design:type", Array)
], PaymentProvider.prototype, "paymentCollections", void 0);
exports.PaymentProvider = PaymentProvider = __decorate([
    (0, typeorm_1.Index)("IDX_payment_provider_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("payment_provider_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("payment_provider", { schema: "public" })
], PaymentProvider);
//# sourceMappingURL=PaymentProvider.js.map