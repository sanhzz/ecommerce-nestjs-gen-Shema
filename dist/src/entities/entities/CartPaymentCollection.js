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
exports.CartPaymentCollection = void 0;
const typeorm_1 = require("typeorm");
let CartPaymentCollection = class CartPaymentCollection {
    cartId;
    paymentCollectionId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.CartPaymentCollection = CartPaymentCollection;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "cart_id", length: 255 }),
    __metadata("design:type", String)
], CartPaymentCollection.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "payment_collection_id",
        length: 255,
    }),
    __metadata("design:type", String)
], CartPaymentCollection.prototype, "paymentCollectionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], CartPaymentCollection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CartPaymentCollection.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CartPaymentCollection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartPaymentCollection.prototype, "deletedAt", void 0);
exports.CartPaymentCollection = CartPaymentCollection = __decorate([
    (0, typeorm_1.Index)("cart_payment_collection_pkey", ["cartId", "paymentCollectionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_cart_id_-4a39f6c9", ["cartId"], {}),
    (0, typeorm_1.Index)("IDX_deleted_at_-4a39f6c9", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_-4a39f6c9", ["id"], {}),
    (0, typeorm_1.Index)("IDX_payment_collection_id_-4a39f6c9", ["paymentCollectionId"], {}),
    (0, typeorm_1.Entity)("cart_payment_collection", { schema: "public" })
], CartPaymentCollection);
//# sourceMappingURL=CartPaymentCollection.js.map