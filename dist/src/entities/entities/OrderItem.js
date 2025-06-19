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
exports.OrderItem = void 0;
const typeorm_1 = require("typeorm");
const OrderLineItem_1 = require("./OrderLineItem");
const Order_1 = require("./Order");
let OrderItem = class OrderItem {
    id;
    orderId;
    version;
    itemId;
    quantity;
    rawQuantity;
    fulfilledQuantity;
    rawFulfilledQuantity;
    shippedQuantity;
    rawShippedQuantity;
    returnRequestedQuantity;
    rawReturnRequestedQuantity;
    returnReceivedQuantity;
    rawReturnReceivedQuantity;
    returnDismissedQuantity;
    rawReturnDismissedQuantity;
    writtenOffQuantity;
    rawWrittenOffQuantity;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    deliveredQuantity;
    rawDeliveredQuantity;
    unitPrice;
    rawUnitPrice;
    compareAtUnitPrice;
    rawCompareAtUnitPrice;
    item;
    order;
    orderLineItems;
};
exports.OrderItem = OrderItem;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], OrderItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "order_id" }),
    __metadata("design:type", String)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "version" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "item_id" }),
    __metadata("design:type", String)
], OrderItem.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "fulfilled_quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "fulfilledQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_fulfilled_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawFulfilledQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "shipped_quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "shippedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_shipped_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawShippedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "return_requested_quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "returnRequestedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_return_requested_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawReturnRequestedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "return_received_quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "returnReceivedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_return_received_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawReturnReceivedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "return_dismissed_quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "returnDismissedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_return_dismissed_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawReturnDismissedQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "written_off_quantity" }),
    __metadata("design:type", String)
], OrderItem.prototype, "writtenOffQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_written_off_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawWrittenOffQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "delivered_quantity", default: () => "0" }),
    __metadata("design:type", String)
], OrderItem.prototype, "deliveredQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_delivered_quantity" }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawDeliveredQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "unit_price", nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_unit_price", nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "compare_at_unit_price", nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "compareAtUnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_compare_at_unit_price", nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "rawCompareAtUnitPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderLineItem_1.OrderLineItem, (orderLineItem) => orderLineItem.orderItems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "item_id", referencedColumnName: "id" }]),
    __metadata("design:type", OrderLineItem_1.OrderLineItem)
], OrderItem.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderItems, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "id" }]),
    __metadata("design:type", Order_1.Order)
], OrderItem.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderLineItem_1.OrderLineItem, (orderLineItem) => orderLineItem.totals),
    __metadata("design:type", Array)
], OrderItem.prototype, "orderLineItems", void 0);
exports.OrderItem = OrderItem = __decorate([
    (0, typeorm_1.Index)("IDX_order_item_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("order_item_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_order_item_item_id", ["itemId"], {}),
    (0, typeorm_1.Index)("IDX_order_item_order_id_version", ["orderId", "version"], {}),
    (0, typeorm_1.Index)("IDX_order_item_order_id", ["orderId"], {}),
    (0, typeorm_1.Entity)("order_item", { schema: "public" })
], OrderItem);
//# sourceMappingURL=OrderItem.js.map