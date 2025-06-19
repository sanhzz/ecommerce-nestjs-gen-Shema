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
exports.LocationFulfillmentProvider = void 0;
const typeorm_1 = require("typeorm");
let LocationFulfillmentProvider = class LocationFulfillmentProvider {
    stockLocationId;
    fulfillmentProviderId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.LocationFulfillmentProvider = LocationFulfillmentProvider;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "stock_location_id",
        length: 255,
    }),
    __metadata("design:type", String)
], LocationFulfillmentProvider.prototype, "stockLocationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "fulfillment_provider_id",
        length: 255,
    }),
    __metadata("design:type", String)
], LocationFulfillmentProvider.prototype, "fulfillmentProviderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], LocationFulfillmentProvider.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], LocationFulfillmentProvider.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], LocationFulfillmentProvider.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], LocationFulfillmentProvider.prototype, "deletedAt", void 0);
exports.LocationFulfillmentProvider = LocationFulfillmentProvider = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_-1e5992737", ["deletedAt"], {}),
    (0, typeorm_1.Index)("location_fulfillment_provider_pkey", ["fulfillmentProviderId", "stockLocationId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_fulfillment_provider_id_-1e5992737", ["fulfillmentProviderId"], {}),
    (0, typeorm_1.Index)("IDX_id_-1e5992737", ["id"], {}),
    (0, typeorm_1.Index)("IDX_stock_location_id_-1e5992737", ["stockLocationId"], {}),
    (0, typeorm_1.Entity)("location_fulfillment_provider", { schema: "public" })
], LocationFulfillmentProvider);
//# sourceMappingURL=LocationFulfillmentProvider.js.map