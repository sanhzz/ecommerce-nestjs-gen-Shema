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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const Image_1 = require("./Image");
const ProductCollection_1 = require("./ProductCollection");
const ProductType_1 = require("./ProductType");
const ProductCategory_1 = require("./ProductCategory");
const ProductOption_1 = require("./ProductOption");
const ProductTag_1 = require("./ProductTag");
const ProductVariant_1 = require("./ProductVariant");
let Product = class Product {
    id;
    title;
    handle;
    subtitle;
    description;
    isGiftcard;
    status;
    thumbnail;
    weight;
    length;
    height;
    width;
    originCountry;
    hsCode;
    midCode;
    material;
    collectionId;
    typeId;
    discountable;
    externalId;
    createdAt;
    updatedAt;
    deletedAt;
    metadata;
    images;
    collection;
    type;
    productCategories;
    productOptions;
    productTags;
    productVariants;
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "handle" }),
    __metadata("design:type", String)
], Product.prototype, "handle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "subtitle", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_giftcard", default: () => "false" }),
    __metadata("design:type", Boolean)
], Product.prototype, "isGiftcard", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'draft'" }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "thumbnail", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "weight", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "length", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "height", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "width", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "origin_country", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "originCountry", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "hs_code", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "hsCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "mid_code", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "midCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "material", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "collection_id", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "collectionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type_id", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "discountable", default: () => "true" }),
    __metadata("design:type", Boolean)
], Product.prototype, "discountable", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "external_id", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Image_1.Image, (image) => image.product),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductCollection_1.ProductCollection, (productCollection) => productCollection.products, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "collection_id", referencedColumnName: "id" }]),
    __metadata("design:type", ProductCollection_1.ProductCollection)
], Product.prototype, "collection", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductType_1.ProductType, (productType) => productType.products, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "type_id", referencedColumnName: "id" }]),
    __metadata("design:type", ProductType_1.ProductType)
], Product.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ProductCategory_1.ProductCategory, (productCategory) => productCategory.products),
    __metadata("design:type", Array)
], Product.prototype, "productCategories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductOption_1.ProductOption, (productOption) => productOption.product),
    __metadata("design:type", Array)
], Product.prototype, "productOptions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ProductTag_1.ProductTag, (productTag) => productTag.products),
    (0, typeorm_1.JoinTable)({
        name: "product_tags",
        joinColumns: [{ name: "product_id", referencedColumnName: "id" }],
        inverseJoinColumns: [
            { name: "product_tag_id", referencedColumnName: "id" },
        ],
        schema: "public",
    }),
    __metadata("design:type", Array)
], Product.prototype, "productTags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductVariant_1.ProductVariant, (productVariant) => productVariant.product),
    __metadata("design:type", Array)
], Product.prototype, "productVariants", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Index)("IDX_product_collection_id", ["collectionId"], {}),
    (0, typeorm_1.Index)("IDX_product_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_product_handle_unique", ["handle"], { unique: true }),
    (0, typeorm_1.Index)("product_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_product_type_id", ["typeId"], {}),
    (0, typeorm_1.Entity)("product", { schema: "public" })
], Product);
//# sourceMappingURL=Product.js.map