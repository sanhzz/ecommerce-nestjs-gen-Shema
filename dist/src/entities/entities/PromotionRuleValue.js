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
exports.PromotionRuleValue = void 0;
const typeorm_1 = require("typeorm");
const PromotionRule_1 = require("./PromotionRule");
let PromotionRuleValue = class PromotionRuleValue {
    id;
    promotionRuleId;
    value;
    createdAt;
    updatedAt;
    deletedAt;
    promotionRule;
};
exports.PromotionRuleValue = PromotionRuleValue;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PromotionRuleValue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "promotion_rule_id" }),
    __metadata("design:type", String)
], PromotionRuleValue.prototype, "promotionRuleId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "value" }),
    __metadata("design:type", String)
], PromotionRuleValue.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionRuleValue.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionRuleValue.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionRuleValue.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PromotionRule_1.PromotionRule, (promotionRule) => promotionRule.promotionRuleValues, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "promotion_rule_id", referencedColumnName: "id" }]),
    __metadata("design:type", PromotionRule_1.PromotionRule)
], PromotionRuleValue.prototype, "promotionRule", void 0);
exports.PromotionRuleValue = PromotionRuleValue = __decorate([
    (0, typeorm_1.Index)("IDX_promotion_rule_value_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("promotion_rule_value_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_promotion_rule_value_promotion_rule_id", ["promotionRuleId"], {}),
    (0, typeorm_1.Entity)("promotion_rule_value", { schema: "public" })
], PromotionRuleValue);
//# sourceMappingURL=PromotionRuleValue.js.map