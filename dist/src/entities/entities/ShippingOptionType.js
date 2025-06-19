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
exports.ShippingOptionType = void 0;
const typeorm_1 = require("typeorm");
const ShippingOption_1 = require("./ShippingOption");
let ShippingOptionType = class ShippingOptionType {
    id;
    label;
    description;
    code;
    createdAt;
    updatedAt;
    deletedAt;
    shippingOptions;
};
exports.ShippingOptionType = ShippingOptionType;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ShippingOptionType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "label" }),
    __metadata("design:type", String)
], ShippingOptionType.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], ShippingOptionType.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "code" }),
    __metadata("design:type", String)
], ShippingOptionType.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingOptionType.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingOptionType.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ShippingOptionType.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShippingOption_1.ShippingOption, (shippingOption) => shippingOption.shippingOptionType),
    __metadata("design:type", Array)
], ShippingOptionType.prototype, "shippingOptions", void 0);
exports.ShippingOptionType = ShippingOptionType = __decorate([
    (0, typeorm_1.Index)("IDX_shipping_option_type_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("shipping_option_type_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("shipping_option_type", { schema: "public" })
], ShippingOptionType);
//# sourceMappingURL=ShippingOptionType.js.map