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
exports.StockLocationAddress = void 0;
const typeorm_1 = require("typeorm");
const StockLocation_1 = require("./StockLocation");
let StockLocationAddress = class StockLocationAddress {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    address_1;
    address_2;
    company;
    city;
    countryCode;
    phone;
    province;
    postalCode;
    metadata;
    stockLocation;
};
exports.StockLocationAddress = StockLocationAddress;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], StockLocationAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], StockLocationAddress.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], StockLocationAddress.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_1" }),
    __metadata("design:type", String)
], StockLocationAddress.prototype, "address_1", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_2", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "address_2", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "company", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "city", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "country_code" }),
    __metadata("design:type", String)
], StockLocationAddress.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "phone", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "province", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "postal_code", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], StockLocationAddress.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => StockLocation_1.StockLocation, (stockLocation) => stockLocation.address),
    __metadata("design:type", StockLocation_1.StockLocation)
], StockLocationAddress.prototype, "stockLocation", void 0);
exports.StockLocationAddress = StockLocationAddress = __decorate([
    (0, typeorm_1.Index)("IDX_stock_location_address_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("stock_location_address_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("stock_location_address", { schema: "public" })
], StockLocationAddress);
//# sourceMappingURL=StockLocationAddress.js.map