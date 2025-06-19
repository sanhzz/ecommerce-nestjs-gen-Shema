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
exports.ProductOption = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const ProductOptionValue_1 = require("./ProductOptionValue");
let ProductOption = class ProductOption {
    id;
    title;
    productId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    product;
    productOptionValues;
};
exports.ProductOption = ProductOption;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProductOption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], ProductOption.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "product_id" }),
    __metadata("design:type", String)
], ProductOption.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ProductOption.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductOption.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductOption.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductOption.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.productOptions, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "product_id", referencedColumnName: "id" }]),
    __metadata("design:type", Product_1.Product)
], ProductOption.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductOptionValue_1.ProductOptionValue, (productOptionValue) => productOptionValue.option),
    __metadata("design:type", Array)
], ProductOption.prototype, "productOptionValues", void 0);
exports.ProductOption = ProductOption = __decorate([
    (0, typeorm_1.Index)("IDX_product_option_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("product_option_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_option_product_id_title_unique", ["productId", "title"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_product_option_product_id", ["productId"], {}),
    (0, typeorm_1.Entity)("product_option", { schema: "public" })
], ProductOption);
//# sourceMappingURL=ProductOption.js.map