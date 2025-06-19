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
exports.OrderShippingMethodTaxLine = void 0;
const typeorm_1 = require("typeorm");
const OrderShippingMethod_1 = require("./OrderShippingMethod");
let OrderShippingMethodTaxLine = class OrderShippingMethodTaxLine {
    id;
    description;
    taxRateId;
    code;
    rate;
    rawRate;
    providerId;
    createdAt;
    updatedAt;
    shippingMethodId;
    deletedAt;
    shippingMethod;
};
exports.OrderShippingMethodTaxLine = OrderShippingMethodTaxLine;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderShippingMethodTaxLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodTaxLine.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "tax_rate_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodTaxLine.prototype, "taxRateId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code" }),
    __metadata("design:type", String)
], OrderShippingMethodTaxLine.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "rate" }),
    __metadata("design:type", String)
], OrderShippingMethodTaxLine.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_rate" }),
    __metadata("design:type", Object)
], OrderShippingMethodTaxLine.prototype, "rawRate", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodTaxLine.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethodTaxLine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShippingMethodTaxLine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_method_id" }),
    __metadata("design:type", String)
], OrderShippingMethodTaxLine.prototype, "shippingMethodId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderShippingMethodTaxLine.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderShippingMethod_1.OrderShippingMethod, (orderShippingMethod) => orderShippingMethod.orderShippingMethodTaxLines, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_method_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderShippingMethod_1.OrderShippingMethod)
], OrderShippingMethodTaxLine.prototype, "shippingMethod", void 0);
exports.OrderShippingMethodTaxLine = OrderShippingMethodTaxLine = __decorate([
    (0, typeorm_1.Index)("order_shipping_method_tax_line_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_shipping_method_tax_line_shipping_method_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Entity)("order_shipping_method_tax_line", { schema: "public" })
], OrderShippingMethodTaxLine);
//# sourceMappingURL=OrderShippingMethodTaxLine.js.map