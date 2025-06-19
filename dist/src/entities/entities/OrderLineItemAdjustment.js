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
exports.OrderLineItemAdjustment = void 0;
const typeorm_1 = require("typeorm");
const OrderLineItem_1 = require("./OrderLineItem");
let OrderLineItemAdjustment = class OrderLineItemAdjustment {
    id;
    description;
    promotionId;
    code;
    amount;
    rawAmount;
    providerId;
    createdAt;
    updatedAt;
    itemId;
    deletedAt;
    item;
};
exports.OrderLineItemAdjustment = OrderLineItemAdjustment;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderLineItemAdjustment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItemAdjustment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "promotion_id", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItemAdjustment.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItemAdjustment.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], OrderLineItemAdjustment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], OrderLineItemAdjustment.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItemAdjustment.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderLineItemAdjustment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderLineItemAdjustment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "item_id" }),
    __metadata("design:type", String)
], OrderLineItemAdjustment.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderLineItemAdjustment.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderLineItem_1.OrderLineItem, (orderLineItem) => orderLineItem.orderLineItemAdjustments, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "item_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderLineItem_1.OrderLineItem)
], OrderLineItemAdjustment.prototype, "item", void 0);
exports.OrderLineItemAdjustment = OrderLineItemAdjustment = __decorate([
    (0, typeorm_1.Index)("order_line_item_adjustment_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_line_item_adjustment_item_id", ["itemId"], {}),
    (0, typeorm_1.Entity)("order_line_item_adjustment", { schema: "public" })
], OrderLineItemAdjustment);
//# sourceMappingURL=OrderLineItemAdjustment.js.map