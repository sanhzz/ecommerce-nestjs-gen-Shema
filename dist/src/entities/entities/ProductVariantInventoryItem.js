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
exports.ProductVariantInventoryItem = void 0;
const typeorm_1 = require("typeorm");
let ProductVariantInventoryItem = class ProductVariantInventoryItem {
    variantId;
    inventoryItemId;
    id;
    requiredQuantity;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.ProductVariantInventoryItem = ProductVariantInventoryItem;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "variant_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ProductVariantInventoryItem.prototype, "variantId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "inventory_item_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ProductVariantInventoryItem.prototype, "inventoryItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], ProductVariantInventoryItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "required_quantity", default: () => "1" }),
    __metadata("design:type", Number)
], ProductVariantInventoryItem.prototype, "requiredQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ProductVariantInventoryItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ProductVariantInventoryItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductVariantInventoryItem.prototype, "deletedAt", void 0);
exports.ProductVariantInventoryItem = ProductVariantInventoryItem = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_17b4c4e35", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_17b4c4e35", ["id"], {}),
    (0, typeorm_1.Index)("product_variant_inventory_item_pkey", ["inventoryItemId", "variantId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_inventory_item_id_17b4c4e35", ["inventoryItemId"], {}),
    (0, typeorm_1.Index)("IDX_variant_id_17b4c4e35", ["variantId"], {}),
    (0, typeorm_1.Entity)("product_variant_inventory_item", { schema: "public" })
], ProductVariantInventoryItem);
//# sourceMappingURL=ProductVariantInventoryItem.js.map