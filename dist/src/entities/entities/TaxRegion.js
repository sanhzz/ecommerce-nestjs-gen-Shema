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
exports.TaxRegion = void 0;
const typeorm_1 = require("typeorm");
const TaxRate_1 = require("./TaxRate");
const TaxProvider_1 = require("./TaxProvider");
let TaxRegion = class TaxRegion {
    id;
    providerId;
    countryCode;
    provinceCode;
    parentId;
    metadata;
    createdAt;
    updatedAt;
    createdBy;
    deletedAt;
    taxRate;
    parent;
    taxRegions;
    provider;
};
exports.TaxRegion = TaxRegion;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], TaxRegion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "country_code" }),
    __metadata("design:type", String)
], TaxRegion.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "province_code", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "provinceCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "parent_id", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], TaxRegion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], TaxRegion.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], TaxRegion.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => TaxRate_1.TaxRate, (taxRate) => taxRate.taxRegion),
    __metadata("design:type", TaxRate_1.TaxRate)
], TaxRegion.prototype, "taxRate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TaxRegion, (taxRegion) => taxRegion.taxRegions, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "parent_id", referencedColumnName: "id" }]),
    __metadata("design:type", TaxRegion)
], TaxRegion.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TaxRegion, (taxRegion) => taxRegion.parent),
    __metadata("design:type", Array)
], TaxRegion.prototype, "taxRegions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TaxProvider_1.TaxProvider, (taxProvider) => taxProvider.taxRegions, {
        onDelete: "SET NULL",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "provider_id", referencedColumnName: "id" }]),
    __metadata("design:type", TaxProvider_1.TaxProvider)
], TaxRegion.prototype, "provider", void 0);
exports.TaxRegion = TaxRegion = __decorate([
    (0, typeorm_1.Index)("IDX_tax_region_unique_country_province", ["countryCode", "provinceCode"], { unique: true }),
    (0, typeorm_1.Index)("IDX_tax_region_unique_country_nullable_province", ["countryCode"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_tax_region_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("tax_region_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_tax_region_parent_id", ["parentId"], {}),
    (0, typeorm_1.Index)("IDX_tax_region_provider_id", ["providerId"], {}),
    (0, typeorm_1.Entity)("tax_region", { schema: "public" })
], TaxRegion);
//# sourceMappingURL=TaxRegion.js.map