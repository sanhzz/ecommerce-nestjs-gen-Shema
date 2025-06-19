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
exports.CartLineItem = void 0;
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
const CartLineItemAdjustment_1 = require("./CartLineItemAdjustment");
const CartLineItemTaxLine_1 = require("./CartLineItemTaxLine");
let CartLineItem = class CartLineItem {
    id;
    cartId;
    title;
    subtitle;
    thumbnail;
    quantity;
    variantId;
    productId;
    productTitle;
    productDescription;
    productSubtitle;
    productType;
    productCollection;
    productHandle;
    variantSku;
    variantBarcode;
    variantTitle;
    variantOptionValues;
    requiresShipping;
    isDiscountable;
    isTaxInclusive;
    compareAtUnitPrice;
    rawCompareAtUnitPrice;
    unitPrice;
    rawUnitPrice;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    productTypeId;
    isCustomPrice;
    isGiftcard;
    cart;
    cartLineItemAdjustments;
    cartLineItemTaxLines;
};
exports.CartLineItem = CartLineItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartLineItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "cart_id" }),
    __metadata("design:type", String)
], CartLineItem.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], CartLineItem.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "subtitle", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "thumbnail", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "quantity" }),
    __metadata("design:type", Number)
], CartLineItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "variantId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_title", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_description", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_subtitle", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productSubtitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_type", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productType", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_collection", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productCollection", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_handle", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productHandle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_sku", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "variantSku", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_barcode", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "variantBarcode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_title", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "variantTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "variant_option_values", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "variantOptionValues", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "requires_shipping", default: () => "true" }),
    __metadata("design:type", Boolean)
], CartLineItem.prototype, "requiresShipping", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_discountable", default: () => "true" }),
    __metadata("design:type", Boolean)
], CartLineItem.prototype, "isDiscountable", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_tax_inclusive", default: () => "false" }),
    __metadata("design:type", Boolean)
], CartLineItem.prototype, "isTaxInclusive", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "compare_at_unit_price", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "compareAtUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_compare_at_unit_price", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "rawCompareAtUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "unit_price" }),
    __metadata("design:type", String)
], CartLineItem.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_unit_price" }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "rawUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartLineItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartLineItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_type_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItem.prototype, "productTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_custom_price", default: () => "false" }),
    __metadata("design:type", Boolean)
], CartLineItem.prototype, "isCustomPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_giftcard", default: () => "false" }),
    __metadata("design:type", Boolean)
], CartLineItem.prototype, "isGiftcard", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cart_1.Cart, (cart) => cart.cartLineItems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cart_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cart_1.Cart)
], CartLineItem.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartLineItemAdjustment_1.CartLineItemAdjustment, (cartLineItemAdjustment) => cartLineItemAdjustment.item),
    __metadata("design:type", Array)
], CartLineItem.prototype, "cartLineItemAdjustments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartLineItemTaxLine_1.CartLineItemTaxLine, (cartLineItemTaxLine) => cartLineItemTaxLine.item),
    __metadata("design:type", Array)
], CartLineItem.prototype, "cartLineItemTaxLines", void 0);
exports.CartLineItem = CartLineItem = __decorate([
    (0, typeorm_1.Index)("IDX_cart_line_item_cart_id", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_line_item_cart_id", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_cart_line_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_line_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_line_item_product_id", ["productId"], {}),
    (0, typeorm_1.Index)("IDX_line_item_product_type_id", ["productTypeId"], {}),
    (0, typeorm_1.Index)("IDX_line_item_variant_id", ["variantId"], {}),
    (0, typeorm_1.Entity)("cart_line_item", { schema: "public" })
], CartLineItem);
//# sourceMappingURL=CartLineItem.js.map