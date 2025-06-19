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
exports.GeoZone = void 0;
const typeorm_1 = require("typeorm");
const ServiceZone_1 = require("./ServiceZone");
let GeoZone = class GeoZone {
    id;
    type;
    countryCode;
    provinceCode;
    city;
    serviceZoneId;
    postalExpression;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    serviceZone;
};
exports.GeoZone = GeoZone;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], GeoZone.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type", default: () => "'country'" }),
    __metadata("design:type", String)
], GeoZone.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "country_code" }),
    __metadata("design:type", String)
], GeoZone.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "province_code", nullable: true }),
    __metadata("design:type", Object)
], GeoZone.prototype, "provinceCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "city", nullable: true }),
    __metadata("design:type", Object)
], GeoZone.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "service_zone_id" }),
    __metadata("design:type", String)
], GeoZone.prototype, "serviceZoneId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "postal_expression", nullable: true }),
    __metadata("design:type", Object)
], GeoZone.prototype, "postalExpression", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], GeoZone.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], GeoZone.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], GeoZone.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], GeoZone.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ServiceZone_1.ServiceZone, (serviceZone) => serviceZone.geoZones, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "service_zone_id", referencedColumnName: "id" }]),
    __metadata("design:type", ServiceZone_1.ServiceZone)
], GeoZone.prototype, "serviceZone", void 0);
exports.GeoZone = GeoZone = __decorate([
    (0, typeorm_1.Index)("IDX_geo_zone_city", ["city"], {}),
    (0, typeorm_1.Index)("IDX_geo_zone_country_code", ["countryCode"], {}),
    (0, typeorm_1.Index)("IDX_geo_zone_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("geo_zone_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_geo_zone_province_code", ["provinceCode"], {}),
    (0, typeorm_1.Index)("IDX_geo_zone_service_zone_id", ["serviceZoneId"], {}),
    (0, typeorm_1.Entity)("geo_zone", { schema: "public" })
], GeoZone);
//# sourceMappingURL=GeoZone.js.map