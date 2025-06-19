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
exports.PromotionApplicationMethod = void 0;
const typeorm_1 = require("typeorm");
const PromotionRule_1 = require("./PromotionRule");
const Promotion_1 = require("./Promotion");
let PromotionApplicationMethod = class PromotionApplicationMethod {
    id;
    value;
    rawValue;
    maxQuantity;
    applyToQuantity;
    buyRulesMinQuantity;
    type;
    targetType;
    allocation;
    promotionId;
    createdAt;
    updatedAt;
    deletedAt;
    currencyCode;
    promotionRules;
    promotionRules2;
    promotion;
};
exports.PromotionApplicationMethod = PromotionApplicationMethod;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PromotionApplicationMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "value", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_value", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "rawValue", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "max_quantity", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "maxQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "apply_to_quantity", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "applyToQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "buy_rules_min_quantity", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "buyRulesMinQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type" }),
    __metadata("design:type", String)
], PromotionApplicationMethod.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "target_type" }),
    __metadata("design:type", String)
], PromotionApplicationMethod.prototype, "targetType", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "allocation", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "allocation", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "promotion_id" }),
    __metadata("design:type", String)
], PromotionApplicationMethod.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionApplicationMethod.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionApplicationMethod.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code", nullable: true }),
    __metadata("design:type", Object)
], PromotionApplicationMethod.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PromotionRule_1.PromotionRule, (promotionRule) => promotionRule.promotionApplicationMethods),
    (0, typeorm_1.JoinTable)({
        name: "application_method_buy_rules",
        joinColumns: [
            { name: "application_method_id", referencedColumnName: "id" },
        ],
        inverseJoinColumns: [
            { name: "promotion_rule_id", referencedColumnName: "id" },
        ],
        schema: "public",
    }),
    __metadata("design:type", Array)
], PromotionApplicationMethod.prototype, "promotionRules", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PromotionRule_1.PromotionRule, (promotionRule) => promotionRule.promotionApplicationMethods2),
    (0, typeorm_1.JoinTable)({
        name: "application_method_target_rules",
        joinColumns: [
            { name: "application_method_id", referencedColumnName: "id" },
        ],
        inverseJoinColumns: [
            { name: "promotion_rule_id", referencedColumnName: "id" },
        ],
        schema: "public",
    }),
    __metadata("design:type", Array)
], PromotionApplicationMethod.prototype, "promotionRules2", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Promotion_1.Promotion, (promotion) => promotion.promotionApplicationMethod, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "promotion_id", referencedColumnName: "id" }]),
    __metadata("design:type", Promotion_1.Promotion)
], PromotionApplicationMethod.prototype, "promotion", void 0);
exports.PromotionApplicationMethod = PromotionApplicationMethod = __decorate([
    (0, typeorm_1.Index)("IDX_application_method_allocation", ["allocation"], {}),
    (0, typeorm_1.Index)("IDX_promotion_application_method_currency_code", ["currencyCode"], {}),
    (0, typeorm_1.Index)("IDX_promotion_application_method_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("promotion_application_method_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_promotion_application_method_promotion_id_unique", ["promotionId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_application_method_target_type", ["targetType"], {}),
    (0, typeorm_1.Index)("IDX_application_method_type", ["type"], {}),
    (0, typeorm_1.Entity)("promotion_application_method", { schema: "public" })
], PromotionApplicationMethod);
//# sourceMappingURL=PromotionApplicationMethod.js.map