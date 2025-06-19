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
exports.CartPromotion = void 0;
const typeorm_1 = require("typeorm");
let CartPromotion = class CartPromotion {
    cartId;
    promotionId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.CartPromotion = CartPromotion;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "cart_id", length: 255 }),
    __metadata("design:type", String)
], CartPromotion.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "promotion_id",
        length: 255,
    }),
    __metadata("design:type", String)
], CartPromotion.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], CartPromotion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CartPromotion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CartPromotion.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartPromotion.prototype, "deletedAt", void 0);
exports.CartPromotion = CartPromotion = __decorate([
    (0, typeorm_1.Index)("IDX_cart_id_-a9d4a70b", ["cartId"], {}),
    (0, typeorm_1.Index)("cart_promotion_pkey", ["cartId", "promotionId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_deleted_at_-a9d4a70b", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_-a9d4a70b", ["id"], {}),
    (0, typeorm_1.Index)("IDX_promotion_id_-a9d4a70b", ["promotionId"], {}),
    (0, typeorm_1.Entity)("cart_promotion", { schema: "public" })
], CartPromotion);
//# sourceMappingURL=CartPromotion.js.map