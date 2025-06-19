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
exports.ShippingOption = void 0;
const typeorm_1 = require("typeorm");
const Fulfillment_1 = require("./Fulfillment");
const FulfillmentProvider_1 = require("./FulfillmentProvider");
const ServiceZone_1 = require("./ServiceZone");
const ShippingOptionType_1 = require("./ShippingOptionType");
const ShippingProfile_1 = require("./ShippingProfile");
const ShippingOptionRule_1 = require("./ShippingOptionRule");
let ShippingOption = class ShippingOption {
    id;
    name;
    priceType;
    serviceZoneId;
    shippingProfileId;
    providerId;
    data;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    fulfillments;
    provider;
    serviceZone;
    shippingOptionType;
    shippingProfile;
    shippingOptionRules;
};
exports.ShippingOption = ShippingOption;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ShippingOption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], ShippingOption.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "price_type", default: () => "'flat'" }),
    __metadata("design:type", String)
], ShippingOption.prototype, "priceType", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "service_zone_id" }),
    __metadata("design:type", String)
], ShippingOption.prototype, "serviceZoneId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_profile_id", nullable: true }),
    __metadata("design:type", Object)
], ShippingOption.prototype, "shippingProfileId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], ShippingOption.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", nullable: true }),
    __metadata("design:type", Object)
], ShippingOption.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ShippingOption.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingOption.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingOption.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ShippingOption.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Fulfillment_1.Fulfillment, (fulfillment) => fulfillment.shippingOption),
    __metadata("design:type", Array)
], ShippingOption.prototype, "fulfillments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FulfillmentProvider_1.FulfillmentProvider, (fulfillmentProvider) => fulfillmentProvider.shippingOptions, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "provider_id", referencedColumnName: "id" }]),
    __metadata("design:type", FulfillmentProvider_1.FulfillmentProvider)
], ShippingOption.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ServiceZone_1.ServiceZone, (serviceZone) => serviceZone.shippingOptions, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "service_zone_id", referencedColumnName: "id" }]),
    __metadata("design:type", ServiceZone_1.ServiceZone)
], ShippingOption.prototype, "serviceZone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ShippingOptionType_1.ShippingOptionType, (shippingOptionType) => shippingOptionType.shippingOptions, { onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_option_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", ShippingOptionType_1.ShippingOptionType)
], ShippingOption.prototype, "shippingOptionType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ShippingProfile_1.ShippingProfile, (shippingProfile) => shippingProfile.shippingOptions, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_profile_id", referencedColumnName: "id" }]),
    __metadata("design:type", ShippingProfile_1.ShippingProfile)
], ShippingOption.prototype, "shippingProfile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShippingOptionRule_1.ShippingOptionRule, (shippingOptionRule) => shippingOptionRule.shippingOption),
    __metadata("design:type", Array)
], ShippingOption.prototype, "shippingOptionRules", void 0);
exports.ShippingOption = ShippingOption = __decorate([
    (0, typeorm_1.Index)("IDX_shipping_option_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("shipping_option_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_shipping_option_provider_id", ["providerId"], {}),
    (0, typeorm_1.Index)("IDX_shipping_option_service_zone_id", ["serviceZoneId"], {}),
    (0, typeorm_1.Index)("IDX_shipping_option_shipping_profile_id", ["shippingProfileId"], {}),
    (0, typeorm_1.Entity)("shipping_option", { schema: "public" })
], ShippingOption);
//# sourceMappingURL=ShippingOption.js.map