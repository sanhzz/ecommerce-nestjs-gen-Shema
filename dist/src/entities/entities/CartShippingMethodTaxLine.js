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
exports.CartShippingMethodTaxLine = void 0;
const typeorm_1 = require("typeorm");
const CartShippingMethod_1 = require("./CartShippingMethod");
let CartShippingMethodTaxLine = class CartShippingMethodTaxLine {
    id;
    description;
    taxRateId;
    code;
    rate;
    providerId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    shippingMethodId;
    shippingMethod;
};
exports.CartShippingMethodTaxLine = CartShippingMethodTaxLine;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartShippingMethodTaxLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodTaxLine.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "tax_rate_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodTaxLine.prototype, "taxRateId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code" }),
    __metadata("design:type", String)
], CartShippingMethodTaxLine.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("real", { name: "rate", precision: 24 }),
    __metadata("design:type", Number)
], CartShippingMethodTaxLine.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodTaxLine.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodTaxLine.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartShippingMethodTaxLine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartShippingMethodTaxLine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodTaxLine.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_method_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethodTaxLine.prototype, "shippingMethodId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CartShippingMethod_1.CartShippingMethod, (cartShippingMethod) => cartShippingMethod.cartShippingMethodTaxLines, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_method_id", referencedColumnName: "id" }]),
    __metadata("design:type", CartShippingMethod_1.CartShippingMethod)
], CartShippingMethodTaxLine.prototype, "shippingMethod", void 0);
exports.CartShippingMethodTaxLine = CartShippingMethodTaxLine = __decorate([
    (0, typeorm_1.Index)("IDX_cart_shipping_method_tax_line_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_shipping_method_tax_line_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_cart_shipping_method_tax_line_shipping_method_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Index)("IDX_tax_line_shipping_method_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Index)("IDX_shipping_method_tax_line_tax_rate_id", ["taxRateId"], {}),
    (0, typeorm_1.Entity)("cart_shipping_method_tax_line", { schema: "public" })
], CartShippingMethodTaxLine);
//# sourceMappingURL=CartShippingMethodTaxLine.js.map