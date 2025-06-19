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
exports.CartAddress = void 0;
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
let CartAddress = class CartAddress {
    id;
    customerId;
    company;
    firstName;
    lastName;
    address_1;
    address_2;
    city;
    countryCode;
    province;
    postalCode;
    phone;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    carts;
    carts2;
};
exports.CartAddress = CartAddress;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CartAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "customer_id", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "company", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "first_name", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "last_name", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_1", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "address_1", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_2", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "address_2", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "city", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "country_code", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "province", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "postal_code", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "phone", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartAddress.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CartAddress.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CartAddress.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Cart_1.Cart, (cart) => cart.billingAddress),
    __metadata("design:type", Array)
], CartAddress.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Cart_1.Cart, (cart) => cart.shippingAddress),
    __metadata("design:type", Array)
], CartAddress.prototype, "carts2", void 0);
exports.CartAddress = CartAddress = __decorate([
    (0, typeorm_1.Index)("IDX_cart_address_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("cart_address_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("cart_address", { schema: "public" })
], CartAddress);
//# sourceMappingURL=CartAddress.js.map