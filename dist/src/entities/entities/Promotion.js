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
exports.Promotion = void 0;
const typeorm_1 = require("typeorm");
const PromotionCampaign_1 = require("./PromotionCampaign");
const PromotionApplicationMethod_1 = require("./PromotionApplicationMethod");
const PromotionRule_1 = require("./PromotionRule");
let Promotion = class Promotion {
    id;
    code;
    campaignId;
    isAutomatic;
    type;
    createdAt;
    updatedAt;
    deletedAt;
    status;
    campaign;
    promotionApplicationMethod;
    promotionRules;
};
exports.Promotion = Promotion;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Promotion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code" }),
    __metadata("design:type", String)
], Promotion.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "campaign_id", nullable: true }),
    __metadata("design:type", Object)
], Promotion.prototype, "campaignId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_automatic", default: () => "false" }),
    __metadata("design:type", Boolean)
], Promotion.prototype, "isAutomatic", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type" }),
    __metadata("design:type", String)
], Promotion.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Promotion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Promotion.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Promotion.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'draft'" }),
    __metadata("design:type", String)
], Promotion.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PromotionCampaign_1.PromotionCampaign, (promotionCampaign) => promotionCampaign.promotions, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "campaign_id", referencedColumnName: "id" }]),
    __metadata("design:type", PromotionCampaign_1.PromotionCampaign)
], Promotion.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PromotionApplicationMethod_1.PromotionApplicationMethod, (promotionApplicationMethod) => promotionApplicationMethod.promotion),
    __metadata("design:type", PromotionApplicationMethod_1.PromotionApplicationMethod)
], Promotion.prototype, "promotionApplicationMethod", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => PromotionRule_1.PromotionRule, (promotionRule) => promotionRule.promotions),
    (0, typeorm_1.JoinTable)({
        name: "promotion_promotion_rule",
        joinColumns: [{ name: "promotion_id", referencedColumnName: "id" }],
        inverseJoinColumns: [
            { name: "promotion_rule_id", referencedColumnName: "id" },
        ],
        schema: "public",
    }),
    __metadata("design:type", Array)
], Promotion.prototype, "promotionRules", void 0);
exports.Promotion = Promotion = __decorate([
    (0, typeorm_1.Index)("IDX_promotion_campaign_id", ["campaignId"], {}),
    (0, typeorm_1.Index)("IDX_unique_promotion_code", ["code"], { unique: true }),
    (0, typeorm_1.Index)("IDX_promotion_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("promotion_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_promotion_status", ["status"], {}),
    (0, typeorm_1.Index)("IDX_promotion_type", ["type"], {}),
    (0, typeorm_1.Entity)("promotion", { schema: "public" })
], Promotion);
//# sourceMappingURL=Promotion.js.map