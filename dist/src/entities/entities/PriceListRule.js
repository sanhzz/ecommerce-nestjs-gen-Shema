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
exports.PriceListRule = void 0;
const typeorm_1 = require("typeorm");
const PriceList_1 = require("./PriceList");
let PriceListRule = class PriceListRule {
    id;
    priceListId;
    createdAt;
    updatedAt;
    deletedAt;
    value;
    attribute;
    priceList;
};
exports.PriceListRule = PriceListRule;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PriceListRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "price_list_id" }),
    __metadata("design:type", String)
], PriceListRule.prototype, "priceListId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceListRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceListRule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PriceListRule.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "value", nullable: true }),
    __metadata("design:type", Object)
], PriceListRule.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "attribute", default: () => "''" }),
    __metadata("design:type", String)
], PriceListRule.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PriceList_1.PriceList, (priceList) => priceList.priceListRules, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "price_list_id", referencedColumnName: "id" }]),
    __metadata("design:type", PriceList_1.PriceList)
], PriceListRule.prototype, "priceList", void 0);
exports.PriceListRule = PriceListRule = __decorate([
    (0, typeorm_1.Index)("IDX_price_list_rule_attribute", ["attribute"], {}),
    (0, typeorm_1.Index)("IDX_price_list_rule_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("price_list_rule_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_price_list_rule_price_list_id", ["priceListId"], {}),
    (0, typeorm_1.Entity)("price_list_rule", { schema: "public" })
], PriceListRule);
//# sourceMappingURL=PriceListRule.js.map