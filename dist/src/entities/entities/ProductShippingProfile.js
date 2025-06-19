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
exports.ProductShippingProfile = void 0;
const typeorm_1 = require("typeorm");
let ProductShippingProfile = class ProductShippingProfile {
    productId;
    shippingProfileId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.ProductShippingProfile = ProductShippingProfile;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "product_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ProductShippingProfile.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "shipping_profile_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ProductShippingProfile.prototype, "shippingProfileId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], ProductShippingProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ProductShippingProfile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ProductShippingProfile.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProductShippingProfile.prototype, "deletedAt", void 0);
exports.ProductShippingProfile = ProductShippingProfile = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_17a262437", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_17a262437", ["id"], {}),
    (0, typeorm_1.Index)("IDX_product_id_17a262437", ["productId"], {}),
    (0, typeorm_1.Index)("product_shipping_profile_pkey", ["productId", "shippingProfileId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_shipping_profile_id_17a262437", ["shippingProfileId"], {}),
    (0, typeorm_1.Entity)("product_shipping_profile", { schema: "public" })
], ProductShippingProfile);
//# sourceMappingURL=ProductShippingProfile.js.map