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
exports.LocationFulfillmentSet = void 0;
const typeorm_1 = require("typeorm");
let LocationFulfillmentSet = class LocationFulfillmentSet {
    stockLocationId;
    fulfillmentSetId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.LocationFulfillmentSet = LocationFulfillmentSet;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "stock_location_id",
        length: 255,
    }),
    __metadata("design:type", String)
], LocationFulfillmentSet.prototype, "stockLocationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "fulfillment_set_id",
        length: 255,
    }),
    __metadata("design:type", String)
], LocationFulfillmentSet.prototype, "fulfillmentSetId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], LocationFulfillmentSet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], LocationFulfillmentSet.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], LocationFulfillmentSet.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], LocationFulfillmentSet.prototype, "deletedAt", void 0);
exports.LocationFulfillmentSet = LocationFulfillmentSet = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_-e88adb96", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_fulfillment_set_id_-e88adb96", ["fulfillmentSetId"], {}),
    (0, typeorm_1.Index)("location_fulfillment_set_pkey", ["fulfillmentSetId", "stockLocationId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_id_-e88adb96", ["id"], {}),
    (0, typeorm_1.Index)("IDX_stock_location_id_-e88adb96", ["stockLocationId"], {}),
    (0, typeorm_1.Entity)("location_fulfillment_set", { schema: "public" })
], LocationFulfillmentSet);
//# sourceMappingURL=LocationFulfillmentSet.js.map