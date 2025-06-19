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
exports.ProductVariant = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const ProductOptionValue_1 = require("./ProductOptionValue");
let ProductVariant = class ProductVariant {
    id;
    title;
    sku;
    barcode;
    ean;
    upc;
    allowBackorder;
    manageInventory;
    hsCode;
    originCountry;
    midCode;
    material;
    weight;
    length;
    height;
    width;
    metadata;
    variantRank;
    productId;
    createdAt;
    updatedAt;
    deletedAt;
    product;
    productOptionValues;
};
exports.ProductVariant = ProductVariant;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProductVariant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], ProductVariant.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "sku", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "barcode", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "barcode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "ean", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "ean", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "upc", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "upc", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "allow_backorder", default: () => "false" }),
    __metadata("design:type", Boolean)
], ProductVariant.prototype, "allowBackorder", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "manage_inventory", default: () => "true" }),
    __metadata("design:type", Boolean)
], ProductVariant.prototype, "manageInventory", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "hs_code", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "hsCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "origin_country", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "originCountry", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "mid_code", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "midCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "material", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "weight", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "length", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "height", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "width", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", {
        name: "variant_rank",
        nullable: true,
        default: () => "0",
    }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "variantRank", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_id", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductVariant.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductVariant.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductVariant.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.productVariants, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "product_id", referencedColumnName: "id" }]),
    __metadata("design:type", Product_1.Product)
], ProductVariant.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ProductOptionValue_1.ProductOptionValue, (productOptionValue) => productOptionValue.productVariants),
    __metadata("design:type", Array)
], ProductVariant.prototype, "productOptionValues", void 0);
exports.ProductVariant = ProductVariant = __decorate([
    (0, typeorm_1.Index)("IDX_product_variant_barcode_unique", ["barcode"], { unique: true }),
    (0, typeorm_1.Index)("IDX_product_variant_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_product_variant_ean_unique", ["ean"], { unique: true }),
    (0, typeorm_1.Index)("product_variant_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_product_variant_id_product_id", ["id", "productId"], {}),
    (0, typeorm_1.Index)("IDX_product_variant_product_id", ["productId"], {}),
    (0, typeorm_1.Index)("IDX_product_variant_sku_unique", ["sku"], { unique: true }),
    (0, typeorm_1.Index)("IDX_product_variant_upc_unique", ["upc"], { unique: true }),
    (0, typeorm_1.Entity)("product_variant", { schema: "public" })
], ProductVariant);
//# sourceMappingURL=ProductVariant.js.map