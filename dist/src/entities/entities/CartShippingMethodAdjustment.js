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
exports.CartShippingMethodAdjustment = void 0;
const typeorm_1 = require("typeorm");
const CartShippingMethod_1 = require("./CartShippingMethod");
let CartShippingMethodAdjustment = class CartShippingMethodAdjustment {
    id;
    description;
    promotionId;
    code;
    amount;
    rawAmount;
    providerId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    shippingMethodId;
    shippingMethod;
};
exports.CartShippingMethodAdjustment = CartShippingMethodAdjustment;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartShippingMethodAdjustment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "promotion_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], CartShippingMethodAdjustment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartShippingMethodAdjustment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartShippingMethodAdjustment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_method_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodAdjustment.prototype, "shippingMethodId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CartShippingMethod_1.CartShippingMethod, (cartShippingMethod) => cartShippingMethod.cartShippingMethodAdjustments, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_method_id", referencedColumnName: "id" }]),
    __metadata("design:type", CartShippingMethod_1.CartShippingMethod)
], CartShippingMethodAdjustment.prototype, "shippingMethod", void 0);
exports.CartShippingMethodAdjustment = CartShippingMethodAdjustment = __decorate([
    (0, typeorm_1.Index)("IDX_cart_shipping_method_adjustment_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_shipping_method_adjustment_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_shipping_method_adjustment_promotion_id", ["promotionId"], {}),
    (0, typeorm_1.Index)("IDX_cart_shipping_method_adjustment_shipping_method_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Index)("IDX_adjustment_shipping_method_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Entity)("cart_shipping_method_adjustment", { schema: "public" })
], CartShippingMethodAdjustment);
//# sourceMappingURL=CartShippingMethodAdjustment.js.map