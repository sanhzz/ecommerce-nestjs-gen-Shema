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
exports.SalesChannelStockLocation = void 0;
const typeorm_1 = require("typeorm");
let SalesChannelStockLocation = class SalesChannelStockLocation {
    salesChannelId;
    stockLocationId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.SalesChannelStockLocation = SalesChannelStockLocation;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "sales_channel_id",
        length: 255,
    }),
    __metadata("design:type", String)
], SalesChannelStockLocation.prototype, "salesChannelId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "stock_location_id",
        length: 255,
    }),
    __metadata("design:type", String)
], SalesChannelStockLocation.prototype, "stockLocationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], SalesChannelStockLocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], SalesChannelStockLocation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], SalesChannelStockLocation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], SalesChannelStockLocation.prototype, "deletedAt", void 0);
exports.SalesChannelStockLocation = SalesChannelStockLocation = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_26d06f470", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_26d06f470", ["id"], {}),
    (0, typeorm_1.Index)("IDX_sales_channel_id_26d06f470", ["salesChannelId"], {}),
    (0, typeorm_1.Index)("sales_channel_stock_location_pkey", ["salesChannelId", "stockLocationId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_stock_location_id_26d06f470", ["stockLocationId"], {}),
    (0, typeorm_1.Entity)("sales_channel_stock_location", { schema: "public" })
], SalesChannelStockLocation);
//# sourceMappingURL=SalesChannelStockLocation.js.map