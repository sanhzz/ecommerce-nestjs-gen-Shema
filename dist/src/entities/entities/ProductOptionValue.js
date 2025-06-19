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
exports.ProductOptionValue = void 0;
const typeorm_1 = require("typeorm");
const ProductOption_1 = require("./ProductOption");
const ProductVariant_1 = require("./ProductVariant");
let ProductOptionValue = class ProductOptionValue {
    id;
    value;
    optionId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    option;
    productVariants;
};
exports.ProductOptionValue = ProductOptionValue;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProductOptionValue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "value" }),
    __metadata("design:type", String)
], ProductOptionValue.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "option_id", nullable: true }),
    __metadata("design:type", Object)
], ProductOptionValue.prototype, "optionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ProductOptionValue.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductOptionValue.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProductOptionValue.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductOptionValue.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductOption_1.ProductOption, (productOption) => productOption.productOptionValues, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "option_id", referencedColumnName: "id" }]),
    __metadata("design:type", ProductOption_1.ProductOption)
], ProductOptionValue.prototype, "option", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ProductVariant_1.ProductVariant, (productVariant) => productVariant.productOptionValues),
    (0, typeorm_1.JoinTable)({
        name: "product_variant_option",
        joinColumns: [{ name: "option_value_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "variant_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], ProductOptionValue.prototype, "productVariants", void 0);
exports.ProductOptionValue = ProductOptionValue = __decorate([
    (0, typeorm_1.Index)("IDX_product_option_value_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("product_option_value_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_option_value_option_id_unique", ["optionId", "value"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_product_option_value_option_id", ["optionId"], {}),
    (0, typeorm_1.Entity)("product_option_value", { schema: "public" })
], ProductOptionValue);
//# sourceMappingURL=ProductOptionValue.js.map