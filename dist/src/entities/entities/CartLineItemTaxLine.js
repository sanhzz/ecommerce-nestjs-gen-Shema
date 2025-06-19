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
exports.CartLineItemTaxLine = void 0;
const typeorm_1 = require("typeorm");
const CartLineItem_1 = require("./CartLineItem");
let CartLineItemTaxLine = class CartLineItemTaxLine {
    id;
    description;
    taxRateId;
    code;
    rate;
    providerId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    itemId;
    item;
};
exports.CartLineItemTaxLine = CartLineItemTaxLine;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartLineItemTaxLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemTaxLine.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "tax_rate_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemTaxLine.prototype, "taxRateId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code" }),
    __metadata("design:type", String)
], CartLineItemTaxLine.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("real", { name: "rate", precision: 24 }),
    __metadata("design:type", Number)
], CartLineItemTaxLine.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemTaxLine.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemTaxLine.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartLineItemTaxLine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartLineItemTaxLine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemTaxLine.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "item_id", nullable: true }),
    __metadata("design:type", Object)
], CartLineItemTaxLine.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CartLineItem_1.CartLineItem, (cartLineItem) => cartLineItem.cartLineItemTaxLines, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "item_id", referencedColumnName: "id" }]),
    __metadata("design:type", CartLineItem_1.CartLineItem)
], CartLineItemTaxLine.prototype, "item", void 0);
exports.CartLineItemTaxLine = CartLineItemTaxLine = __decorate([
    (0, typeorm_1.Index)("IDX_cart_line_item_tax_line_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_line_item_tax_line_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_tax_line_item_id", ["itemId"], {}),
    (0, typeorm_1.Index)("IDX_cart_line_item_tax_line_item_id", ["itemId"], {}),
    (0, typeorm_1.Index)("IDX_line_item_tax_line_tax_rate_id", ["taxRateId"], {}),
    (0, typeorm_1.Entity)("cart_line_item_tax_line", { schema: "public" })
], CartLineItemTaxLine);
//# sourceMappingURL=CartLineItemTaxLine.js.map