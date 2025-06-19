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
exports.OrderShipping = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
let OrderShipping = class OrderShipping {
    id;
    orderId;
    version;
    shippingMethodId;
    createdAt;
    updatedAt;
    deletedAt;
    returnId;
    claimId;
    exchangeId;
    order;
};
exports.OrderShipping = OrderShipping;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderShipping.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderShipping.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], OrderShipping.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_method_id" }),
    __metadata("design:type", String)
], OrderShipping.prototype, "shippingMethodId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShipping.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderShipping.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "return_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "claim_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "claimId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "exchange_id", nullable: true }),
    __metadata("design:type", Object)
], OrderShipping.prototype, "exchangeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderShippings, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "id" }]),
    __metadata("design:type", Order_1.Order)
], OrderShipping.prototype, "order", void 0);
exports.OrderShipping = OrderShipping = __decorate([
    (0, typeorm_1.Index)("IDX_order_shipping_claim_id", ["claimId"], {}),
    (0, typeorm_1.Index)("IDX_order_shipping_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_order_shipping_exchange_id", ["exchangeId"], {}),
    (0, typeorm_1.Index)("order_shipping_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_shipping_order_id", ["orderId"], {}),
    (0, typeorm_1.Index)("IDX_order_shipping_order_id_version", ["orderId", "version"], {}),
    (0, typeorm_1.Index)("IDX_order_shipping_return_id", ["returnId"], {}),
    (0, typeorm_1.Index)("IDX_order_shipping_item_id", ["shippingMethodId"], {}),
    (0, typeorm_1.Entity)("order_shipping", { schema: "public" })
], OrderShipping);
//# sourceMappingURL=OrderShipping.js.map