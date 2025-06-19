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
exports.PriceRule = void 0;
const typeorm_1 = require("typeorm");
const Price_1 = require("./Price");
let PriceRule = class PriceRule {
    id;
    value;
    priority;
    priceId;
    createdAt;
    updatedAt;
    deletedAt;
    attribute;
    operator;
    price;
};
exports.PriceRule = PriceRule;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PriceRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "value" }),
    __metadata("design:type", String)
], PriceRule.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "priority", default: () => "0" }),
    __metadata("design:type", Number)
], PriceRule.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "price_id" }),
    __metadata("design:type", String)
], PriceRule.prototype, "priceId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceRule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PriceRule.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "attribute", default: () => "''" }),
    __metadata("design:type", String)
], PriceRule.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "operator", default: () => "'eq'" }),
    __metadata("design:type", String)
], PriceRule.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Price_1.Price, (price) => price.priceRules, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "price_id", referencedColumnName: "id" }]),
    __metadata("design:type", Price_1.Price)
], PriceRule.prototype, "price", void 0);
exports.PriceRule = PriceRule = __decorate([
    (0, typeorm_1.Index)("IDX_price_rule_attribute", ["attribute"], {}),
    (0, typeorm_1.Index)("IDX_price_rule_price_id_attribute_operator_unique", ["attribute", "operator", "priceId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_price_rule_attribute_value", ["attribute", "value"], {}),
    (0, typeorm_1.Index)("IDX_price_rule_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("price_rule_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_price_rule_operator_value", ["operator", "value"], {}),
    (0, typeorm_1.Index)("IDX_price_rule_operator", ["operator"], {}),
    (0, typeorm_1.Index)("IDX_price_rule_price_id", ["priceId"], {}),
    (0, typeorm_1.Entity)("price_rule", { schema: "public" })
], PriceRule);
//# sourceMappingURL=PriceRule.js.map