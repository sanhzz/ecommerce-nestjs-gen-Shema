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
exports.InventoryItem = void 0;
const typeorm_1 = require("typeorm");
const InventoryLevel_1 = require("./InventoryLevel");
const ReservationItem_1 = require("./ReservationItem");
let InventoryItem = class InventoryItem {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    sku;
    originCountry;
    hsCode;
    midCode;
    material;
    weight;
    length;
    height;
    width;
    requiresShipping;
    description;
    title;
    thumbnail;
    metadata;
    inventoryLevels;
    reservationItems;
};
exports.InventoryItem = InventoryItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], InventoryItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], InventoryItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], InventoryItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "sku", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "origin_country", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "originCountry", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "hs_code", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "hsCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "mid_code", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "midCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "material", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "weight", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "length", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "height", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "width", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "requires_shipping", default: () => "true" }),
    __metadata("design:type", Boolean)
], InventoryItem.prototype, "requiresShipping", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "thumbnail", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], InventoryItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => InventoryLevel_1.InventoryLevel, (inventoryLevel) => inventoryLevel.inventoryItem),
    __metadata("design:type", Array)
], InventoryItem.prototype, "inventoryLevels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReservationItem_1.ReservationItem, (reservationItem) => reservationItem.inventoryItem),
    __metadata("design:type", Array)
], InventoryItem.prototype, "reservationItems", void 0);
exports.InventoryItem = InventoryItem = __decorate([
    (0, typeorm_1.Index)("IDX_inventory_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("inventory_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_inventory_item_sku", ["sku"], { unique: true }),
    (0, typeorm_1.Entity)("inventory_item", { schema: "public" })
], InventoryItem);
//# sourceMappingURL=InventoryItem.js.map