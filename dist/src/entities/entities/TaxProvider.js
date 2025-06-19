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
exports.TaxProvider = void 0;
const typeorm_1 = require("typeorm");
const TaxRegion_1 = require("./TaxRegion");
let TaxProvider = class TaxProvider {
    id;
    isEnabled;
    createdAt;
    updatedAt;
    deletedAt;
    taxRegions;
};
exports.TaxProvider = TaxProvider;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], TaxProvider.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_enabled", default: () => "true" }),
    __metadata("design:type", Boolean)
], TaxProvider.prototype, "isEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], TaxProvider.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], TaxProvider.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], TaxProvider.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TaxRegion_1.TaxRegion, (taxRegion) => taxRegion.provider),
    __metadata("design:type", Array)
], TaxProvider.prototype, "taxRegions", void 0);
exports.TaxProvider = TaxProvider = __decorate([
    (0, typeorm_1.Index)("IDX_tax_provider_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("tax_provider_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("tax_provider", { schema: "public" })
], TaxProvider);
//# sourceMappingURL=TaxProvider.js.map