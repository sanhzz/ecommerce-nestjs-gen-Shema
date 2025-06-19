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
exports.Region = void 0;
const typeorm_1 = require("typeorm");
const RegionCountry_1 = require("./RegionCountry");
let Region = class Region {
    id;
    name;
    currencyCode;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    automaticTaxes;
    regionCountries;
};
exports.Region = Region;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Region.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], Region.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], Region.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Region.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Region.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Region.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Region.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "automatic_taxes", default: () => "true" }),
    __metadata("design:type", Boolean)
], Region.prototype, "automaticTaxes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RegionCountry_1.RegionCountry, (regionCountry) => regionCountry.region),
    __metadata("design:type", Array)
], Region.prototype, "regionCountries", void 0);
exports.Region = Region = __decorate([
    (0, typeorm_1.Index)("IDX_region_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("region_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("region", { schema: "public" })
], Region);
//# sourceMappingURL=Region.js.map