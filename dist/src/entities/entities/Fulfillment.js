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
exports.Fulfillment = void 0;
const typeorm_1 = require("typeorm");
const FulfillmentAddress_1 = require("./FulfillmentAddress");
const FulfillmentProvider_1 = require("./FulfillmentProvider");
const ShippingOption_1 = require("./ShippingOption");
const FulfillmentItem_1 = require("./FulfillmentItem");
const FulfillmentLabel_1 = require("./FulfillmentLabel");
let Fulfillment = class Fulfillment {
    id;
    locationId;
    packedAt;
    shippedAt;
    deliveredAt;
    canceledAt;
    data;
    shippingOptionId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    markedShippedBy;
    createdBy;
    requiresShipping;
    deliveryAddress;
    provider;
    shippingOption;
    fulfillmentItems;
    fulfillmentLabels;
};
exports.Fulfillment = Fulfillment;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Fulfillment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "location_id" }),
    __metadata("design:type", String)
], Fulfillment.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "packed_at", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "packedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "shipped_at", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "shippedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "delivered_at", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "deliveredAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_option_id", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "shippingOptionId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Fulfillment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Fulfillment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "marked_shipped_by", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "markedShippedBy", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], Fulfillment.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "requires_shipping", default: () => "true" }),
    __metadata("design:type", Boolean)
], Fulfillment.prototype, "requiresShipping", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FulfillmentAddress_1.FulfillmentAddress, (fulfillmentAddress) => fulfillmentAddress.fulfillments, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "delivery_address_id", referencedColumnName: "id" }]),
    __metadata("design:type", FulfillmentAddress_1.FulfillmentAddress)
], Fulfillment.prototype, "deliveryAddress", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FulfillmentProvider_1.FulfillmentProvider, (fulfillmentProvider) => fulfillmentProvider.fulfillments, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "provider_id", referencedColumnName: "id" }]),
    __metadata("design:type", FulfillmentProvider_1.FulfillmentProvider)
], Fulfillment.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ShippingOption_1.ShippingOption, (shippingOption) => shippingOption.fulfillments, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_option_id", referencedColumnName: "id" }]),
    __metadata("design:type", ShippingOption_1.ShippingOption)
], Fulfillment.prototype, "shippingOption", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FulfillmentItem_1.FulfillmentItem, (fulfillmentItem) => fulfillmentItem.fulfillment),
    __metadata("design:type", Array)
], Fulfillment.prototype, "fulfillmentItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FulfillmentLabel_1.FulfillmentLabel, (fulfillmentLabel) => fulfillmentLabel.fulfillment),
    __metadata("design:type", Array)
], Fulfillment.prototype, "fulfillmentLabels", void 0);
exports.Fulfillment = Fulfillment = __decorate([
    (0, typeorm_1.Index)("IDX_fulfillment_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("fulfillment_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_fulfillment_location_id", ["locationId"], {}),
    (0, typeorm_1.Index)("IDX_fulfillment_shipping_option_id", ["shippingOptionId"], {}),
    (0, typeorm_1.Entity)("fulfillment", { schema: "public" })
], Fulfillment);
//# sourceMappingURL=Fulfillment.js.map