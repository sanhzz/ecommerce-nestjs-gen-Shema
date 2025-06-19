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
exports.ProductTag = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let ProductTag = class ProductTag {
    id;
    value;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    products;
};
exports.ProductTag = ProductTag;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProductTag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "value" }),
    __metadata("design:type", String)
], ProductTag.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ProductTag.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductTag.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductTag.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductTag.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Product_1.Product, (product) => product.productTags),
    __metadata("design:type", Array)
], ProductTag.prototype, "products", void 0);
exports.ProductTag = ProductTag = __decorate([
    (0, typeorm_1.Index)("IDX_product_tag_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("product_tag_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_tag_value_unique", ["value"], { unique: true }),
    (0, typeorm_1.Entity)("product_tag", { schema: "public" })
], ProductTag);
//# sourceMappingURL=ProductTag.js.map