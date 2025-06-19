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
exports.StockLocation = void 0;
const typeorm_1 = require("typeorm");
const StockLocationAddress_1 = require("./StockLocationAddress");
let StockLocation = class StockLocation {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    name;
    addressId;
    metadata;
    address;
};
exports.StockLocation = StockLocation;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], StockLocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], StockLocation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], StockLocation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], StockLocation.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], StockLocation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_id", nullable: true }),
    __metadata("design:type", Object)
], StockLocation.prototype, "addressId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], StockLocation.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => StockLocationAddress_1.StockLocationAddress, (stockLocationAddress) => stockLocationAddress.stockLocation, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "address_id", referencedColumnName: "id" }]),
    __metadata("design:type", StockLocationAddress_1.StockLocationAddress)
], StockLocation.prototype, "address", void 0);
exports.StockLocation = StockLocation = __decorate([
    (0, typeorm_1.Index)("IDX_stock_location_address_id_unique", ["addressId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_stock_location_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("stock_location_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("stock_location", { schema: "public" })
], StockLocation);
//# sourceMappingURL=StockLocation.js.map