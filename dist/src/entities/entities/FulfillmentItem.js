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
exports.FulfillmentItem = void 0;
const typeorm_1 = require("typeorm");
const Fulfillment_1 = require("./Fulfillment");
let FulfillmentItem = class FulfillmentItem {
    id;
    title;
    sku;
    barcode;
    quantity;
    rawQuantity;
    lineItemId;
    inventoryItemId;
    fulfillmentId;
    createdAt;
    updatedAt;
    deletedAt;
    fulfillment;
};
exports.FulfillmentItem = FulfillmentItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], FulfillmentItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], FulfillmentItem.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "sku" }),
    __metadata("design:type", String)
], FulfillmentItem.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "barcode" }),
    __metadata("design:type", String)
], FulfillmentItem.prototype, "barcode", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "quantity" }),
    __metadata("design:type", String)
], FulfillmentItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_quantity" }),
    __metadata("design:type", Object)
], FulfillmentItem.prototype, "rawQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "line_item_id", nullable: true }),
    __metadata("design:type", Object)
], FulfillmentItem.prototype, "lineItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "inventory_item_id", nullable: true }),
    __metadata("design:type", Object)
], FulfillmentItem.prototype, "inventoryItemId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "fulfillment_id" }),
    __metadata("design:type", String)
], FulfillmentItem.prototype, "fulfillmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], FulfillmentItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], FulfillmentItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], FulfillmentItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Fulfillment_1.Fulfillment, (fulfillment) => fulfillment.fulfillmentItems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "fulfillment_id", referencedColumnName: "id" }]),
    __metadata("design:type", Fulfillment_1.Fulfillment)
], FulfillmentItem.prototype, "fulfillment", void 0);
exports.FulfillmentItem = FulfillmentItem = __decorate([
    (0, typeorm_1.Index)("IDX_fulfillment_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_fulfillment_item_fulfillment_id", ["fulfillmentId"], {}),
    (0, typeorm_1.Index)("fulfillment_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_fulfillment_item_inventory_item_id", ["inventoryItemId"], {}),
    (0, typeorm_1.Index)("IDX_fulfillment_item_line_item_id", ["lineItemId"], {}),
    (0, typeorm_1.Entity)("fulfillment_item", { schema: "public" })
], FulfillmentItem);
//# sourceMappingURL=FulfillmentItem.js.map