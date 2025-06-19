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
exports.OrderFulfillment = void 0;
const typeorm_1 = require("typeorm");
let OrderFulfillment = class OrderFulfillment {
    orderId;
    fulfillmentId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.OrderFulfillment = OrderFulfillment;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "order_id", length: 255 }),
    __metadata("design:type", String)
], OrderFulfillment.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "fulfillment_id",
        length: 255,
    }),
    __metadata("design:type", String)
], OrderFulfillment.prototype, "fulfillmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], OrderFulfillment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], OrderFulfillment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], OrderFulfillment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderFulfillment.prototype, "deletedAt", void 0);
exports.OrderFulfillment = OrderFulfillment = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_-e8d2543e", ["deletedAt"], {}),
    (0, typeorm_1.Index)("order_fulfillment_pkey", ["fulfillmentId", "orderId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_fulfillment_id_-e8d2543e", ["fulfillmentId"], {}),
    (0, typeorm_1.Index)("IDX_id_-e8d2543e", ["id"], {}),
    (0, typeorm_1.Index)("IDX_order_id_-e8d2543e", ["orderId"], {}),
    (0, typeorm_1.Entity)("order_fulfillment", { schema: "public" })
], OrderFulfillment);
//# sourceMappingURL=OrderFulfillment.js.map