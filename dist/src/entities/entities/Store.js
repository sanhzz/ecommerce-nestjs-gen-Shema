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
exports.Store = void 0;
const typeorm_1 = require("typeorm");
const StoreCurrency_1 = require("./StoreCurrency");
let Store = class Store {
    id;
    name;
    defaultSalesChannelId;
    defaultRegionId;
    defaultLocationId;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    storeCurrencies;
};
exports.Store = Store;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Store.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name", default: () => "'Medusa Store'" }),
    __metadata("design:type", String)
], Store.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "default_sales_channel_id", nullable: true }),
    __metadata("design:type", Object)
], Store.prototype, "defaultSalesChannelId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "default_region_id", nullable: true }),
    __metadata("design:type", Object)
], Store.prototype, "defaultRegionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "default_location_id", nullable: true }),
    __metadata("design:type", Object)
], Store.prototype, "defaultLocationId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Store.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Store.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Store.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Store.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => StoreCurrency_1.StoreCurrency, (storeCurrency) => storeCurrency.store),
    __metadata("design:type", Array)
], Store.prototype, "storeCurrencies", void 0);
exports.Store = Store = __decorate([
    (0, typeorm_1.Index)("IDX_store_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("store_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("store", { schema: "public" })
], Store);
//# sourceMappingURL=Store.js.map