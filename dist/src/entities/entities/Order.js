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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const OrderAddress_1 = require("./OrderAddress");
const OrderChange_1 = require("./OrderChange");
const OrderCreditLine_1 = require("./OrderCreditLine");
const OrderItem_1 = require("./OrderItem");
const OrderShipping_1 = require("./OrderShipping");
const OrderSummary_1 = require("./OrderSummary");
const OrderTransaction_1 = require("./OrderTransaction");
let Order = class Order {
    id;
    regionId;
    displayId;
    customerId;
    version;
    salesChannelId;
    status;
    isDraftOrder;
    email;
    currencyCode;
    shippingAddressId;
    billingAddressId;
    noNotification;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    canceledAt;
    billingAddress;
    shippingAddress;
    orderChanges;
    orderCreditLines;
    orderItems;
    orderShippings;
    orderSummaries;
    orderTransactions;
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "region_id", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "display_id",
    }),
    __metadata("design:type", Object)
], Order.prototype, "displayId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "customer_id", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version", default: () => "1" }),
    __metadata("design:type", Number)
], Order.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "sales_channel_id", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "salesChannelId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "status",
        enum: [
            "pending",
            "completed",
            "draft",
            "archived",
            "canceled",
            "requires_action",
        ],
        default: () => "'pending'",
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_draft_order", default: () => "false" }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDraftOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "email", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], Order.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_address_id", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "shippingAddressId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "billing_address_id", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "billingAddressId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "no_notification", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "noNotification", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "canceled_at", nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "canceledAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderAddress_1.OrderAddress, (orderAddress) => orderAddress.orders, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "billing_address_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderAddress_1.OrderAddress)
], Order.prototype, "billingAddress", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderAddress_1.OrderAddress, (orderAddress) => orderAddress.orders2, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_address_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderAddress_1.OrderAddress)
], Order.prototype, "shippingAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderChange_1.OrderChange, (orderChange) => orderChange.order),
    __metadata("design:type", Array)
], Order.prototype, "orderChanges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderCreditLine_1.OrderCreditLine, (orderCreditLine) => orderCreditLine.order),
    __metadata("design:type", Array)
], Order.prototype, "orderCreditLines", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderItem_1.OrderItem, (orderItem) => orderItem.order),
    __metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderShipping_1.OrderShipping, (orderShipping) => orderShipping.order),
    __metadata("design:type", Array)
], Order.prototype, "orderShippings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderSummary_1.OrderSummary, (orderSummary) => orderSummary.order),
    __metadata("design:type", Array)
], Order.prototype, "orderSummaries", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderTransaction_1.OrderTransaction, (orderTransaction) => orderTransaction.order),
    __metadata("design:type", Array)
], Order.prototype, "orderTransactions", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Index)("IDX_order_billing_address_id", ["billingAddressId"], {}),
    (0, typeorm_1.Index)("IDX_order_currency_code", ["currencyCode"], {}),
    (0, typeorm_1.Index)("IDX_order_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("IDX_order_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_order_display_id", ["displayId"], {}),
    (0, typeorm_1.Index)("order_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_is_draft_order", ["isDraftOrder"], {}),
    (0, typeorm_1.Index)("IDX_order_region_id", ["regionId"], {}),
    (0, typeorm_1.Index)("IDX_order_shipping_address_id", ["shippingAddressId"], {}),
    (0, typeorm_1.Entity)("order", { schema: "public" })
], Order);
//# sourceMappingURL=Order.js.map