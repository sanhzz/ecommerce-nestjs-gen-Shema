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
exports.OrderClaimItem = void 0;
const typeorm_1 = require("typeorm");
let OrderClaimItem = class OrderClaimItem {
    id;
    claimId;
    itemId;
    isAdditionalItem;
    reason;
    quantity;
    rawQuantity;
    note;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.OrderClaimItem = OrderClaimItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "claim_id" }),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "claimId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "item_id" }),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_additional_item", default: () => "false" }),
    __metadata("design:type", Boolean)
], OrderClaimItem.prototype, "isAdditionalItem", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "reason",
        nullable: true,
        enum: ["missing_item", "wrong_item", "production_failure", "other"],
    }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "quantity" }),
    __metadata("design:type", String)
], OrderClaimItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_quantity" }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "rawQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "note", nullable: true }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderClaimItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderClaimItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderClaimItem.prototype, "deletedAt", void 0);
exports.OrderClaimItem = OrderClaimItem = __decorate([
    (0, typeorm_1.Index)("IDX_order_claim_item_claim_id", ["claimId"], {}),
    (0, typeorm_1.Index)("IDX_order_claim_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("order_claim_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_claim_item_item_id", ["itemId"], {}),
    (0, typeorm_1.Entity)("order_claim_item", { schema: "public" })
], OrderClaimItem);
//# sourceMappingURL=OrderClaimItem.js.map