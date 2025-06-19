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
exports.CartLineItemAdjustment = void 0;
const typeorm_1 = require("typeorm");
const CartLineItem_1 = require("./CartLineItem");
let CartLineItemAdjustment = class CartLineItemAdjustment {
    id;
    description;
    promotionId;
    code;
    amount;
    rawAmount;
    providerId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    itemId;
    item;
};
exports.CartLineItemAdjustment = CartLineItemAdjustment;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartLineItemAdjustment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "promotion_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], CartLineItemAdjustment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartLineItemAdjustment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartLineItemAdjustment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "item_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemAdjustment.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CartLineItem_1.CartLineItem, (cartLineItem) => cartLineItem.cartLineItemAdjustments, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "item_id", referencedColumnName: "id" }]),
    __metadata("design:type", CartLineItem_1.CartLineItem)
], CartLineItemAdjustment.prototype, "item", void 0);
exports.CartLineItemAdjustment = CartLineItemAdjustment = __decorate([
    (0, typeorm_1.Index)("IDX_cart_line_item_adjustment_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_line_item_adjustment_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_adjustment_item_id", ["itemId"], {}),
    (0, typeorm_1.Index)("IDX_cart_line_item_adjustment_item_id", ["itemId"], {}),
    (0, typeorm_1.Index)("IDX_line_item_adjustment_promotion_id", ["promotionId"], {}),
    (0, typeorm_1.Entity)("cart_line_item_adjustment", { schema: "public" })
], CartLineItemAdjustment);
//# sourceMappingURL=CartLineItemAdjustment.js.map