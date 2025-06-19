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
exports.OrderCart = void 0;
const typeorm_1 = require("typeorm");
let OrderCart = class OrderCart {
    orderId;
    cartId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.OrderCart = OrderCart;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "order_id", length: 255 }),
    __metadata("design:type", String)
], OrderCart.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "cart_id", length: 255 }),
    __metadata("design:type", String)
], OrderCart.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], OrderCart.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], OrderCart.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], OrderCart.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderCart.prototype, "deletedAt", void 0);
exports.OrderCart = OrderCart = __decorate([
    (0, typeorm_1.Index)("order_cart_pkey", ["cartId", "orderId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_cart_id_-71069c16", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_deleted_at_-71069c16", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_-71069c16", ["id"], {}),
    (0, typeorm_1.Index)("IDX_order_id_-71069c16", ["orderId"], {}),
    (0, typeorm_1.Entity)("order_cart", { schema: "public" })
], OrderCart);
//# sourceMappingURL=OrderCart.js.map