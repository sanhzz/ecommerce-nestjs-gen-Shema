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
exports.OrderLineItem = void 0;
const typeorm_1 = require("typeorm");
const OrderItem_1 = require("./OrderItem");
const OrderLineItemAdjustment_1 = require("./OrderLineItemAdjustment");
const OrderLineItemTaxLine_1 = require("./OrderLineItemTaxLine");
let OrderLineItem = class OrderLineItem {
    id;
    title;
    subtitle;
    thumbnail;
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
    isCustomPrice;
    productTypeId;
    isGiftcard;
    orderItems;
    totals;
    orderLineItemAdjustments;
    orderLineItemTaxLines;
};
exports.OrderLineItem = OrderLineItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderLineItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], OrderLineItem.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "subtitle", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "thumbnail", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_id", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variantId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_id", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_title", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_description", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_subtitle", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productSubtitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_type", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productType", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_collection", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productCollection", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_handle", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productHandle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_sku", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variantSku", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_barcode", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variantBarcode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "variant_title", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variantTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "variant_option_values", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "variantOptionValues", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "requires_shipping", default: () => "true" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "requiresShipping", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_discountable", default: () => "true" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "isDiscountable", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_tax_inclusive", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "isTaxInclusive", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "compare_at_unit_price", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "compareAtUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_compare_at_unit_price", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "rawCompareAtUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "unit_price" }),
    __metadata("design:type", String)
], OrderLineItem.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_unit_price" }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "rawUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderLineItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderLineItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_custom_price", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "isCustomPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_type_id", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItem.prototype, "productTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_giftcard", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderLineItem.prototype, "isGiftcard", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderItem_1.OrderItem, (orderItem) => orderItem.item),
    __metadata("design:type", Array)
], OrderLineItem.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderItem_1.OrderItem, (orderItem) => orderItem.orderLineItems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "totals_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderItem_1.OrderItem)
], OrderLineItem.prototype, "totals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderLineItemAdjustment_1.OrderLineItemAdjustment, (orderLineItemAdjustment) => orderLineItemAdjustment.item),
    __metadata("design:type", Array)
], OrderLineItem.prototype, "orderLineItemAdjustments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderLineItemTaxLine_1.OrderLineItemTaxLine, (orderLineItemTaxLine) => orderLineItemTaxLine.item),
    __metadata("design:type", Array)
], OrderLineItem.prototype, "orderLineItemTaxLines", void 0);
exports.OrderLineItem = OrderLineItem = __decorate([
    (0, typeorm_1.Index)("order_line_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_line_item_product_id", ["productId"], {}),
    (0, typeorm_1.Index)("IDX_order_line_item_variant_id", ["variantId"], {}),
    (0, typeorm_1.Entity)("order_line_item", { schema: "public" })
], OrderLineItem);
//# sourceMappingURL=OrderLineItem.js.map