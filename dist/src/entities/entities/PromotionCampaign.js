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
exports.PromotionCampaign = void 0;
const typeorm_1 = require("typeorm");
const Promotion_1 = require("./Promotion");
const PromotionCampaignBudget_1 = require("./PromotionCampaignBudget");
let PromotionCampaign = class PromotionCampaign {
    id;
    name;
    description;
    campaignIdentifier;
    startsAt;
    endsAt;
    createdAt;
    updatedAt;
    deletedAt;
    promotions;
    promotionCampaignBudget;
};
exports.PromotionCampaign = PromotionCampaign;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PromotionCampaign.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], PromotionCampaign.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaign.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "campaign_identifier" }),
    __metadata("design:type", String)
], PromotionCampaign.prototype, "campaignIdentifier", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "starts_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaign.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "ends_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaign.prototype, "endsAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionCampaign.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PromotionCampaign.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PromotionCampaign.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Promotion_1.Promotion, (promotion) => promotion.campaign),
    __metadata("design:type", Array)
], PromotionCampaign.prototype, "promotions", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PromotionCampaignBudget_1.PromotionCampaignBudget, (promotionCampaignBudget) => promotionCampaignBudget.campaign),
    __metadata("design:type", PromotionCampaignBudget_1.PromotionCampaignBudget)
], PromotionCampaign.prototype, "promotionCampaignBudget", void 0);
exports.PromotionCampaign = PromotionCampaign = __decorate([
    (0, typeorm_1.Index)("IDX_promotion_campaign_campaign_identifier_unique", ["campaignIdentifier"], { unique: true }),
    (0, typeorm_1.Index)("IDX_promotion_campaign_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("promotion_campaign_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("promotion_campaign", { schema: "public" })
], PromotionCampaign);
//# sourceMappingURL=PromotionCampaign.js.map