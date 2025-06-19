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
exports.RegionPaymentProvider = void 0;
const typeorm_1 = require("typeorm");
let RegionPaymentProvider = class RegionPaymentProvider {
    regionId;
    paymentProviderId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.RegionPaymentProvider = RegionPaymentProvider;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "region_id",
        length: 255,
    }),
    __metadata("design:type", String)
], RegionPaymentProvider.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "payment_provider_id",
        length: 255,
    }),
    __metadata("design:type", String)
], RegionPaymentProvider.prototype, "paymentProviderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], RegionPaymentProvider.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], RegionPaymentProvider.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], RegionPaymentProvider.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], RegionPaymentProvider.prototype, "deletedAt", void 0);
exports.RegionPaymentProvider = RegionPaymentProvider = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_1c934dab0", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_1c934dab0", ["id"], {}),
    (0, typeorm_1.Index)("IDX_payment_provider_id_1c934dab0", ["paymentProviderId"], {}),
    (0, typeorm_1.Index)("region_payment_provider_pkey", ["paymentProviderId", "regionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_region_id_1c934dab0", ["regionId"], {}),
    (0, typeorm_1.Entity)("region_payment_provider", { schema: "public" })
], RegionPaymentProvider);
//# sourceMappingURL=RegionPaymentProvider.js.map