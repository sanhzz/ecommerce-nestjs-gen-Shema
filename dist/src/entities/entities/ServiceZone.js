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
exports.ServiceZone = void 0;
const typeorm_1 = require("typeorm");
const GeoZone_1 = require("./GeoZone");
const FulfillmentSet_1 = require("./FulfillmentSet");
const ShippingOption_1 = require("./ShippingOption");
let ServiceZone = class ServiceZone {
    id;
    name;
    metadata;
    fulfillmentSetId;
    createdAt;
    updatedAt;
    deletedAt;
    geoZones;
    fulfillmentSet;
    shippingOptions;
};
exports.ServiceZone = ServiceZone;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ServiceZone.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], ServiceZone.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ServiceZone.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "fulfillment_set_id" }),
    __metadata("design:type", String)
], ServiceZone.prototype, "fulfillmentSetId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ServiceZone.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ServiceZone.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ServiceZone.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeoZone_1.GeoZone, (geoZone) => geoZone.serviceZone),
    __metadata("design:type", Array)
], ServiceZone.prototype, "geoZones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FulfillmentSet_1.FulfillmentSet, (fulfillmentSet) => fulfillmentSet.serviceZones, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "fulfillment_set_id", referencedColumnName: "id" }]),
    __metadata("design:type", FulfillmentSet_1.FulfillmentSet)
], ServiceZone.prototype, "fulfillmentSet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShippingOption_1.ShippingOption, (shippingOption) => shippingOption.serviceZone),
    __metadata("design:type", Array)
], ServiceZone.prototype, "shippingOptions", void 0);
exports.ServiceZone = ServiceZone = __decorate([
    (0, typeorm_1.Index)("IDX_service_zone_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_service_zone_fulfillment_set_id", ["fulfillmentSetId"], {}),
    (0, typeorm_1.Index)("service_zone_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_service_zone_name_unique", ["name"], { unique: true }),
    (0, typeorm_1.Entity)("service_zone", { schema: "public" })
], ServiceZone);
//# sourceMappingURL=ServiceZone.js.map