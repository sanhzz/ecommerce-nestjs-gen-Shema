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
exports.ProductCollection = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let ProductCollection = class ProductCollection {
    id;
    title;
    handle;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    products;
};
exports.ProductCollection = ProductCollection;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProductCollection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], ProductCollection.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "handle" }),
    __metadata("design:type", String)
], ProductCollection.prototype, "handle", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ProductCollection.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductCollection.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductCollection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductCollection.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.collection),
    __metadata("design:type", Array)
], ProductCollection.prototype, "products", void 0);
exports.ProductCollection = ProductCollection = __decorate([
    (0, typeorm_1.Index)("IDX_product_collection_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_product_category_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_collection_handle_unique", ["handle"], { unique: true }),
    (0, typeorm_1.Index)("product_collection_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("product_collection", { schema: "public" })
], ProductCollection);
//# sourceMappingURL=ProductCollection.js.map