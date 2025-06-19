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
exports.ShippingOptionPriceSet = void 0;
const typeorm_1 = require("typeorm");
let ShippingOptionPriceSet = class ShippingOptionPriceSet {
    shippingOptionId;
    priceSetId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.ShippingOptionPriceSet = ShippingOptionPriceSet;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "shipping_option_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ShippingOptionPriceSet.prototype, "shippingOptionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "price_set_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ShippingOptionPriceSet.prototype, "priceSetId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], ShippingOptionPriceSet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ShippingOptionPriceSet.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ShippingOptionPriceSet.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ShippingOptionPriceSet.prototype, "deletedAt", void 0);
exports.ShippingOptionPriceSet = ShippingOptionPriceSet = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_ba32fa9c", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_ba32fa9c", ["id"], {}),
    (0, typeorm_1.Index)("IDX_price_set_id_ba32fa9c", ["priceSetId"], {}),
    (0, typeorm_1.Index)("shipping_option_price_set_pkey", ["priceSetId", "shippingOptionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_shipping_option_id_ba32fa9c", ["shippingOptionId"], {}),
    (0, typeorm_1.Entity)("shipping_option_price_set", { schema: "public" })
], ShippingOptionPriceSet);
//# sourceMappingURL=ShippingOptionPriceSet.js.map