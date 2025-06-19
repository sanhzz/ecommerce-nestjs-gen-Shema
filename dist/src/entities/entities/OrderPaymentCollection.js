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
exports.OrderPaymentCollection = void 0;
const typeorm_1 = require("typeorm");
let OrderPaymentCollection = class OrderPaymentCollection {
    orderId;
    paymentCollectionId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.OrderPaymentCollection = OrderPaymentCollection;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "order_id", length: 255 }),
    __metadata("design:type", String)
], OrderPaymentCollection.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "payment_collection_id",
        length: 255,
    }),
    __metadata("design:type", String)
], OrderPaymentCollection.prototype, "paymentCollectionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], OrderPaymentCollection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], OrderPaymentCollection.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], OrderPaymentCollection.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], OrderPaymentCollection.prototype, "deletedAt", void 0);
exports.OrderPaymentCollection = OrderPaymentCollection = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_f42b9949", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_f42b9949", ["id"], {}),
    (0, typeorm_1.Index)("IDX_order_id_f42b9949", ["orderId"], {}),
    (0, typeorm_1.Index)("order_payment_collection_pkey", ["orderId", "paymentCollectionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_payment_collection_id_f42b9949", ["paymentCollectionId"], {}),
    (0, typeorm_1.Entity)("order_payment_collection", { schema: "public" })
], OrderPaymentCollection);
//# sourceMappingURL=OrderPaymentCollection.js.map