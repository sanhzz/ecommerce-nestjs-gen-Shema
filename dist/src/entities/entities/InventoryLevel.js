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
exports.InventoryLevel = void 0;
const typeorm_1 = require("typeorm");
const InventoryItem_1 = require("./InventoryItem");
let InventoryLevel = class InventoryLevel {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    inventoryItemId;
    locationId;
    stockedQuantity;
    reservedQuantity;
    incomingQuantity;
    metadata;
    rawStockedQuantity;
    rawReservedQuantity;
    rawIncomingQuantity;
    inventoryItem;
};
exports.InventoryLevel = InventoryLevel;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], InventoryLevel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], InventoryLevel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], InventoryLevel.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "inventory_item_id" }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "inventoryItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "location_id" }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "stocked_quantity", default: () => "0" }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "stockedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "reserved_quantity", default: () => "0" }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "reservedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "incoming_quantity", default: () => "0" }),
    __metadata("design:type", String)
], InventoryLevel.prototype, "incomingQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], InventoryLevel.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_stocked_quantity", nullable: true }),
    __metadata("design:type", Object)
], InventoryLevel.prototype, "rawStockedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_reserved_quantity", nullable: true }),
    __metadata("design:type", Object)
], InventoryLevel.prototype, "rawReservedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_incoming_quantity", nullable: true }),
    __metadata("design:type", Object)
], InventoryLevel.prototype, "rawIncomingQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => InventoryItem_1.InventoryItem, (inventoryItem) => inventoryItem.inventoryLevels, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "inventory_item_id", referencedColumnName: "id" }]),
    __metadata("design:type", InventoryItem_1.InventoryItem)
], InventoryLevel.prototype, "inventoryItem", void 0);
exports.InventoryLevel = InventoryLevel = __decorate([
    (0, typeorm_1.Index)("IDX_inventory_level_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("inventory_level_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_inventory_level_location_id_inventory_item_id", ["inventoryItemId", "locationId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_inventory_level_inventory_item_id", ["inventoryItemId"], {}),
    (0, typeorm_1.Index)("IDX_inventory_level_item_location", ["inventoryItemId", "locationId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_inventory_level_location_id", ["locationId"], {}),
    (0, typeorm_1.Entity)("inventory_level", { schema: "public" })
], InventoryLevel);
//# sourceMappingURL=InventoryLevel.js.map