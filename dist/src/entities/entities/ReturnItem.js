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
exports.ReturnItem = void 0;
const typeorm_1 = require("typeorm");
let ReturnItem = class ReturnItem {
    id;
    returnId;
    reasonId;
    itemId;
    quantity;
    rawQuantity;
    receivedQuantity;
    rawReceivedQuantity;
    note;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    damagedQuantity;
    rawDamagedQuantity;
};
exports.ReturnItem = ReturnItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reason_id", nullable: true }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "reasonId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "item_id" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "quantity" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_quantity" }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "rawQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "received_quantity", default: () => "0" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "receivedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_received_quantity" }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "rawReceivedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "note", nullable: true }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ReturnItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ReturnItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "damaged_quantity", default: () => "0" }),
    __metadata("design:type", String)
], ReturnItem.prototype, "damagedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_damaged_quantity" }),
    __metadata("design:type", Object)
], ReturnItem.prototype, "rawDamagedQuantity", void 0);
exports.ReturnItem = ReturnItem = __decorate([
    (0, typeorm_1.Index)("IDX_return_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("return_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_return_item_item_id", ["itemId"], {}),
    (0, typeorm_1.Index)("IDX_return_item_reason_id", ["reasonId"], {}),
    (0, typeorm_1.Index)("IDX_return_item_return_id", ["returnId"], {}),
    (0, typeorm_1.Entity)("return_item", { schema: "public" })
], ReturnItem);
//# sourceMappingURL=ReturnItem.js.map