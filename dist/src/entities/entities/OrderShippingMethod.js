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
exports.OrderShippingMethod = void 0;
const typeorm_1 = require("typeorm");
const OrderShippingMethodAdjustment_1 = require("./OrderShippingMethodAdjustment");
const OrderShippingMethodTaxLine_1 = require("./OrderShippingMethodTaxLine");
let OrderShippingMethod = class OrderShippingMethod {
    id;
    name;
    description;
    amount;
    rawAmount;
    isTaxInclusive;
    shippingOptionId;
    data;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    isCustomAmount;
    orderShippingMethodAdjustments;
    orderShippingMethodTaxLines;
};
exports.OrderShippingMethod = OrderShippingMethod;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderShippingMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], OrderShippingMethod.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], OrderShippingMethod.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_tax_inclusive", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderShippingMethod.prototype, "isTaxInclusive", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_option_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "shippingOptionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethod.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethod.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethod.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_custom_amount", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderShippingMethod.prototype, "isCustomAmount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderShippingMethodAdjustment_1.OrderShippingMethodAdjustment, (orderShippingMethodAdjustment) => orderShippingMethodAdjustment.shippingMethod),
    __metadata("design:type", Array)
], OrderShippingMethod.prototype, "orderShippingMethodAdjustments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderShippingMethodTaxLine_1.OrderShippingMethodTaxLine, (orderShippingMethodTaxLine) => orderShippingMethodTaxLine.shippingMethod),
    __metadata("design:type", Array)
], OrderShippingMethod.prototype, "orderShippingMethodTaxLines", void 0);
exports.OrderShippingMethod = OrderShippingMethod = __decorate([
    (0, typeorm_1.Index)("order_shipping_method_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_shipping_method_shipping_option_id", ["shippingOptionId"], {}),
    (0, typeorm_1.Entity)("order_shipping_method", { schema: "public" })
], OrderShippingMethod);
//# sourceMappingURL=OrderShippingMethod.js.map