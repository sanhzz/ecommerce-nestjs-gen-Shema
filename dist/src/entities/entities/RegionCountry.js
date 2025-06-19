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
exports.RegionCountry = void 0;
const typeorm_1 = require("typeorm");
const Region_1 = require("./Region");
let RegionCountry = class RegionCountry {
    iso_2;
    iso_3;
    numCode;
    name;
    displayName;
    regionId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    region;
};
exports.RegionCountry = RegionCountry;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "iso_2" }),
    __metadata("design:type", String)
], RegionCountry.prototype, "iso_2", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "iso_3" }),
    __metadata("design:type", String)
], RegionCountry.prototype, "iso_3", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "num_code" }),
    __metadata("design:type", String)
], RegionCountry.prototype, "numCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], RegionCountry.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "display_name" }),
    __metadata("design:type", String)
], RegionCountry.prototype, "displayName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "region_id", nullable: true }),
    __metadata("design:type", Object)
], RegionCountry.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], RegionCountry.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], RegionCountry.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], RegionCountry.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], RegionCountry.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Region_1.Region, (region) => region.regionCountries, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "region_id", referencedColumnName: "id" }]),
    __metadata("design:type", Region_1.Region)
], RegionCountry.prototype, "region", void 0);
exports.RegionCountry = RegionCountry = __decorate([
    (0, typeorm_1.Index)("IDX_region_country_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("region_country_pkey", ["iso_2"], { unique: true }),
    (0, typeorm_1.Index)("IDX_region_country_region_id_iso_2_unique", ["iso_2", "regionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_region_country_region_id", ["regionId"], {}),
    (0, typeorm_1.Entity)("region_country", { schema: "public" })
], RegionCountry);
//# sourceMappingURL=RegionCountry.js.map