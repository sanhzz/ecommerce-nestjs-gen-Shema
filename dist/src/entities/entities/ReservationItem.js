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
exports.ReservationItem = void 0;
const typeorm_1 = require("typeorm");
const InventoryItem_1 = require("./InventoryItem");
let ReservationItem = class ReservationItem {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    lineItemId;
    locationId;
    quantity;
    externalId;
    description;
    createdBy;
    metadata;
    inventoryItemId;
    allowBackorder;
    rawQuantity;
    inventoryItem;
};
exports.ReservationItem = ReservationItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ReservationItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ReservationItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ReservationItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "line_item_id", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "lineItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "location_id" }),
    __metadata("design:type", String)
], ReservationItem.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "quantity" }),
    __metadata("design:type", String)
], ReservationItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "external_id", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "inventory_item_id" }),
    __metadata("design:type", String)
], ReservationItem.prototype, "inventoryItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", {
        name: "allow_backorder",
        nullable: true,
        default: () => "false",
    }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "allowBackorder", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_quantity", nullable: true }),
    __metadata("design:type", Object)
], ReservationItem.prototype, "rawQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => InventoryItem_1.InventoryItem, (inventoryItem) => inventoryItem.reservationItems, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "inventory_item_id", referencedColumnName: "id" }]),
    __metadata("design:type", InventoryItem_1.InventoryItem)
], ReservationItem.prototype, "inventoryItem", void 0);
exports.ReservationItem = ReservationItem = __decorate([
    (0, typeorm_1.Index)("IDX_reservation_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("reservation_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_reservation_item_inventory_item_id", ["inventoryItemId"], {}),
    (0, typeorm_1.Index)("IDX_reservation_item_line_item_id", ["lineItemId"], {}),
    (0, typeorm_1.Index)("IDX_reservation_item_location_id", ["locationId"], {}),
    (0, typeorm_1.Entity)("reservation_item", { schema: "public" })
], ReservationItem);
//# sourceMappingURL=ReservationItem.js.map