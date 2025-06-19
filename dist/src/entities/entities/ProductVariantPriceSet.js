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
exports.ProductVariantPriceSet = void 0;
const typeorm_1 = require("typeorm");
let ProductVariantPriceSet = class ProductVariantPriceSet {
    variantId;
    priceSetId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.ProductVariantPriceSet = ProductVariantPriceSet;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "variant_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ProductVariantPriceSet.prototype, "variantId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "price_set_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ProductVariantPriceSet.prototype, "priceSetId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], ProductVariantPriceSet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ProductVariantPriceSet.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ProductVariantPriceSet.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductVariantPriceSet.prototype, "deletedAt", void 0);
exports.ProductVariantPriceSet = ProductVariantPriceSet = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_52b23597", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_52b23597", ["id"], {}),
    (0, typeorm_1.Index)("product_variant_price_set_pkey", ["priceSetId", "variantId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_price_set_id_52b23597", ["priceSetId"], {}),
    (0, typeorm_1.Index)("IDX_variant_id_52b23597", ["variantId"], {}),
    (0, typeorm_1.Entity)("product_variant_price_set", { schema: "public" })
], ProductVariantPriceSet);
//# sourceMappingURL=ProductVariantPriceSet.js.map