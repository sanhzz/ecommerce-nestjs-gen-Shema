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
exports.TaxRateRule = void 0;
const typeorm_1 = require("typeorm");
const TaxRate_1 = require("./TaxRate");
let TaxRateRule = class TaxRateRule {
    id;
    taxRateId;
    referenceId;
    reference;
    metadata;
    createdAt;
    updatedAt;
    createdBy;
    deletedAt;
    taxRate;
};
exports.TaxRateRule = TaxRateRule;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], TaxRateRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "tax_rate_id" }),
    __metadata("design:type", String)
], TaxRateRule.prototype, "taxRateId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference_id" }),
    __metadata("design:type", String)
], TaxRateRule.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "reference" }),
    __metadata("design:type", String)
], TaxRateRule.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], TaxRateRule.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], TaxRateRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], TaxRateRule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], TaxRateRule.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], TaxRateRule.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TaxRate_1.TaxRate, (taxRate) => taxRate.taxRateRules, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "tax_rate_id", referencedColumnName: "id" }]),
    __metadata("design:type", TaxRate_1.TaxRate)
], TaxRateRule.prototype, "taxRate", void 0);
exports.TaxRateRule = TaxRateRule = __decorate([
    (0, typeorm_1.Index)("IDX_tax_rate_rule_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("tax_rate_rule_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_tax_rate_rule_unique_rate_reference", ["referenceId", "taxRateId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_tax_rate_rule_reference_id", ["referenceId"], {}),
    (0, typeorm_1.Index)("IDX_tax_rate_rule_tax_rate_id", ["taxRateId"], {}),
    (0, typeorm_1.Entity)("tax_rate_rule", { schema: "public" })
], TaxRateRule);
//# sourceMappingURL=TaxRateRule.js.map