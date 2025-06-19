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
exports.CartShippingMethod = void 0;
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
const CartShippingMethodAdjustment_1 = require("./CartShippingMethodAdjustment");
const CartShippingMethodTaxLine_1 = require("./CartShippingMethodTaxLine");
let CartShippingMethod = class CartShippingMethod {
    id;
    cartId;
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
    cart;
    cartShippingMethodAdjustments;
    cartShippingMethodTaxLines;
};
exports.CartShippingMethod = CartShippingMethod;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartShippingMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "cart_id" }),
    __metadata("design:type", String)
], CartShippingMethod.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], CartShippingMethod.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethod.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], CartShippingMethod.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], CartShippingMethod.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_tax_inclusive", default: () => "false" }),
    __metadata("design:type", Boolean)
], CartShippingMethod.prototype, "isTaxInclusive", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_option_id", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethod.prototype, "shippingOptionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethod.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethod.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartShippingMethod.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartShippingMethod.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartShippingMethod.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cart_1.Cart, (cart) => cart.cartShippingMethods, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cart_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cart_1.Cart)
], CartShippingMethod.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartShippingMethodAdjustment_1.CartShippingMethodAdjustment, (cartShippingMethodAdjustment) => cartShippingMethodAdjustment.shippingMethod),
    __metadata("design:type", Array)
], CartShippingMethod.prototype, "cartShippingMethodAdjustments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartShippingMethodTaxLine_1.CartShippingMethodTaxLine, (cartShippingMethodTaxLine) => cartShippingMethodTaxLine.shippingMethod),
    __metadata("design:type", Array)
], CartShippingMethod.prototype, "cartShippingMethodTaxLines", void 0);
exports.CartShippingMethod = CartShippingMethod = __decorate([
    (0, typeorm_1.Index)("IDX_cart_shipping_method_cart_id", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_shipping_method_cart_id", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_cart_shipping_method_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_shipping_method_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_shipping_method_option_id", ["shippingOptionId"], {}),
    (0, typeorm_1.Entity)("cart_shipping_method", { schema: "public" })
], CartShippingMethod);
//# sourceMappingURL=CartShippingMethod.js.map