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
exports.OrderShippingMethodAdjustment = void 0;
const typeorm_1 = require("typeorm");
const OrderShippingMethod_1 = require("./OrderShippingMethod");
let OrderShippingMethodAdjustment = class OrderShippingMethodAdjustment {
    id;
    description;
    promotionId;
    code;
    amount;
    rawAmount;
    providerId;
    createdAt;
    updatedAt;
    shippingMethodId;
    deletedAt;
    shippingMethod;
};
exports.OrderShippingMethodAdjustment = OrderShippingMethodAdjustment;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderShippingMethodAdjustment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodAdjustment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "promotion_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodAdjustment.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodAdjustment.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], OrderShippingMethodAdjustment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], OrderShippingMethodAdjustment.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodAdjustment.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethodAdjustment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethodAdjustment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_method_id" }),
    __metadata("design:type", String)
], OrderShippingMethodAdjustment.prototype, "shippingMethodId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodAdjustment.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderShippingMethod_1.OrderShippingMethod, (orderShippingMethod) => orderShippingMethod.orderShippingMethodAdjustments, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_method_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderShippingMethod_1.OrderShippingMethod)
], OrderShippingMethodAdjustment.prototype, "shippingMethod", void 0);
exports.OrderShippingMethodAdjustment = OrderShippingMethodAdjustment = __decorate([
    (0, typeorm_1.Index)("order_shipping_method_adjustment_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_shipping_method_adjustment_shipping_method_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Entity)("order_shipping_method_adjustment", { schema: "public" })
], OrderShippingMethodAdjustment);
//# sourceMappingURL=OrderShippingMethodAdjustment.js.map