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
exports.PromotionCampaignBudget = void 0;
const typeorm_1 = require("typeorm");
const PromotionCampaign_1 = require("./PromotionCampaign");
let PromotionCampaignBudget = class PromotionCampaignBudget {
    id;
    type;
    campaignId;
    limit;
    rawLimit;
    used;
    rawUsed;
    createdAt;
    updatedAt;
    deletedAt;
    currencyCode;
    campaign;
};
exports.PromotionCampaignBudget = PromotionCampaignBudget;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PromotionCampaignBudget.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type" }),
    __metadata("design:type", String)
], PromotionCampaignBudget.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "campaign_id" }),
    __metadata("design:type", String)
], PromotionCampaignBudget.prototype, "campaignId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "limit", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaignBudget.prototype, "limit", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_limit", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaignBudget.prototype, "rawLimit", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "used", default: () => "0" }),
    __metadata("design:type", String)
], PromotionCampaignBudget.prototype, "used", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_used" }),
    __metadata("design:type", Object)
], PromotionCampaignBudget.prototype, "rawUsed", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionCampaignBudget.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionCampaignBudget.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaignBudget.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaignBudget.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PromotionCampaign_1.PromotionCampaign, (promotionCampaign) => promotionCampaign.promotionCampaignBudget, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "campaign_id", referencedColumnName: "id" }]),
    __metadata("design:type", PromotionCampaign_1.PromotionCampaign)
], PromotionCampaignBudget.prototype, "campaign", void 0);
exports.PromotionCampaignBudget = PromotionCampaignBudget = __decorate([
    (0, typeorm_1.Index)("IDX_promotion_campaign_budget_campaign_id_unique", ["campaignId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_promotion_campaign_budget_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("promotion_campaign_budget_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_campaign_budget_type", ["type"], {}),
    (0, typeorm_1.Entity)("promotion_campaign_budget", { schema: "public" })
], PromotionCampaignBudget);
//# sourceMappingURL=PromotionCampaignBudget.js.map