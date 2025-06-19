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
exports.PromotionRule = void 0;
const typeorm_1 = require("typeorm");
const PromotionApplicationMethod_1 = require("./PromotionApplicationMethod");
const Promotion_1 = require("./Promotion");
const PromotionRuleValue_1 = require("./PromotionRuleValue");
let PromotionRule = class PromotionRule {
    id;
    description;
    attribute;
    operator;
    createdAt;
    updatedAt;
    deletedAt;
    promotionApplicationMethods;
    promotionApplicationMethods2;
    promotions;
    promotionRuleValues;
};
exports.PromotionRule = PromotionRule;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PromotionRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], PromotionRule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "attribute" }),
    __metadata("design:type", String)
], PromotionRule.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "operator" }),
    __metadata("design:type", String)
], PromotionRule.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionRule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionRule.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PromotionApplicationMethod_1.PromotionApplicationMethod, (promotionApplicationMethod) => promotionApplicationMethod.promotionRules),
    __metadata("design:type", Array)
], PromotionRule.prototype, "promotionApplicationMethods", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PromotionApplicationMethod_1.PromotionApplicationMethod, (promotionApplicationMethod) => promotionApplicationMethod.promotionRules2),
    __metadata("design:type", Array)
], PromotionRule.prototype, "promotionApplicationMethods2", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Promotion_1.Promotion, (promotion) => promotion.promotionRules),
    __metadata("design:type", Array)
], PromotionRule.prototype, "promotions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PromotionRuleValue_1.PromotionRuleValue, (promotionRuleValue) => promotionRuleValue.promotionRule),
    __metadata("design:type", Array)
], PromotionRule.prototype, "promotionRuleValues", void 0);
exports.PromotionRule = PromotionRule = __decorate([
    (0, typeorm_1.Index)("IDX_promotion_rule_attribute", ["attribute"], {}),
    (0, typeorm_1.Index)("IDX_promotion_rule_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("promotion_rule_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_promotion_rule_operator", ["operator"], {}),
    (0, typeorm_1.Entity)("promotion_rule", { schema: "public" })
], PromotionRule);
//# sourceMappingURL=PromotionRule.js.map