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
exports.ProductCategory = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let ProductCategory = class ProductCategory {
    id;
    name;
    description;
    handle;
    mpath;
    isActive;
    isInternal;
    rank;
    parentCategoryId;
    createdAt;
    updatedAt;
    deletedAt;
    metadata;
    parentCategory;
    productCategories;
    products;
};
exports.ProductCategory = ProductCategory;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProductCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], ProductCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", default: () => "''" }),
    __metadata("design:type", String)
], ProductCategory.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "handle" }),
    __metadata("design:type", String)
], ProductCategory.prototype, "handle", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "mpath" }),
    __metadata("design:type", String)
], ProductCategory.prototype, "mpath", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_active", default: () => "false" }),
    __metadata("design:type", Boolean)
], ProductCategory.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_internal", default: () => "false" }),
    __metadata("design:type", Boolean)
], ProductCategory.prototype, "isInternal", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "rank", default: () => "0" }),
    __metadata("design:type", Number)
], ProductCategory.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "parent_category_id", nullable: true }),
    __metadata("design:type", Object)
], ProductCategory.prototype, "parentCategoryId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductCategory.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductCategory.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductCategory.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ProductCategory.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductCategory, (productCategory) => productCategory.productCategories, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "parent_category_id", referencedColumnName: "id" }]),
    __metadata("design:type", ProductCategory)
], ProductCategory.prototype, "parentCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductCategory, (productCategory) => productCategory.parentCategory),
    __metadata("design:type", Array)
], ProductCategory.prototype, "productCategories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Product_1.Product, (product) => product.productCategories),
    (0, typeorm_1.JoinTable)({
        name: "product_category_product",
        joinColumns: [{ name: "product_category_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "product_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], ProductCategory.prototype, "products", void 0);
exports.ProductCategory = ProductCategory = __decorate([
    (0, typeorm_1.Index)("IDX_category_handle_unique", ["handle"], { unique: true }),
    (0, typeorm_1.Index)("product_category_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_product_category_path", ["mpath"], {}),
    (0, typeorm_1.Index)("IDX_product_category_parent_category_id", ["parentCategoryId"], {}),
    (0, typeorm_1.Entity)("product_category", { schema: "public" })
], ProductCategory);
//# sourceMappingURL=ProductCategory.js.map