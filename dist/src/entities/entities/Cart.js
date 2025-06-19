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
exports.Cart = void 0;
const typeorm_1 = require("typeorm");
const CartAddress_1 = require("./CartAddress");
const CartLineItem_1 = require("./CartLineItem");
const CartShippingMethod_1 = require("./CartShippingMethod");
const CreditLine_1 = require("./CreditLine");
let Cart = class Cart {
    id;
    regionId;
    customerId;
    salesChannelId;
    email;
    currencyCode;
    shippingAddressId;
    billingAddressId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    completedAt;
    billingAddress;
    shippingAddress;
    cartLineItems;
    cartShippingMethods;
    creditLines;
};
exports.Cart = Cart;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Cart.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "region_id", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "customer_id", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "sales_channel_id", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "salesChannelId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "email", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], Cart.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_address_id", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "shippingAddressId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "billing_address_id", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "billingAddressId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Cart.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Cart.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "completed_at", nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CartAddress_1.CartAddress, (cartAddress) => cartAddress.carts, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "billing_address_id", referencedColumnName: "id" }]),
    __metadata("design:type", CartAddress_1.CartAddress)
], Cart.prototype, "billingAddress", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CartAddress_1.CartAddress, (cartAddress) => cartAddress.carts2, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_address_id", referencedColumnName: "id" }]),
    __metadata("design:type", CartAddress_1.CartAddress)
], Cart.prototype, "shippingAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartLineItem_1.CartLineItem, (cartLineItem) => cartLineItem.cart),
    __metadata("design:type", Array)
], Cart.prototype, "cartLineItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartShippingMethod_1.CartShippingMethod, (cartShippingMethod) => cartShippingMethod.cart),
    __metadata("design:type", Array)
], Cart.prototype, "cartShippingMethods", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CreditLine_1.CreditLine, (creditLine) => creditLine.cart),
    __metadata("design:type", Array)
], Cart.prototype, "creditLines", void 0);
exports.Cart = Cart = __decorate([
    (0, typeorm_1.Index)("IDX_cart_billing_address_id", ["billingAddressId"], {}),
    (0, typeorm_1.Index)("IDX_cart_currency_code", ["currencyCode"], {}),
    (0, typeorm_1.Index)("IDX_cart_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("IDX_cart_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_cart_region_id", ["regionId"], {}),
    (0, typeorm_1.Index)("IDX_cart_sales_channel_id", ["salesChannelId"], {}),
    (0, typeorm_1.Index)("IDX_cart_shipping_address_id", ["shippingAddressId"], {}),
    (0, typeorm_1.Entity)("cart", { schema: "public" })
], Cart);
//# sourceMappingURL=Cart.js.map