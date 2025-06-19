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
exports.ShippingProfile = void 0;
const typeorm_1 = require("typeorm");
const ShippingOption_1 = require("./ShippingOption");
let ShippingProfile = class ShippingProfile {
    id;
    name;
    type;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    shippingOptions;
};
exports.ShippingProfile = ShippingProfile;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ShippingProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], ShippingProfile.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type" }),
    __metadata("design:type", String)
], ShippingProfile.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ShippingProfile.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingProfile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingProfile.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ShippingProfile.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShippingOption_1.ShippingOption, (shippingOption) => shippingOption.shippingProfile),
    __metadata("design:type", Array)
], ShippingProfile.prototype, "shippingOptions", void 0);
exports.ShippingProfile = ShippingProfile = __decorate([
    (0, typeorm_1.Index)("IDX_shipping_profile_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("shipping_profile_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_shipping_profile_name_unique", ["name"], { unique: true }),
    (0, typeorm_1.Entity)("shipping_profile", { schema: "public" })
], ShippingProfile);
//# sourceMappingURL=ShippingProfile.js.map