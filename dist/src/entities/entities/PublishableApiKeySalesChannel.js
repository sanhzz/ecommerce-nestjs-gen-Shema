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
exports.PublishableApiKeySalesChannel = void 0;
const typeorm_1 = require("typeorm");
let PublishableApiKeySalesChannel = class PublishableApiKeySalesChannel {
    publishableKeyId;
    salesChannelId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.PublishableApiKeySalesChannel = PublishableApiKeySalesChannel;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "publishable_key_id",
        length: 255,
    }),
    __metadata("design:type", String)
], PublishableApiKeySalesChannel.prototype, "publishableKeyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "sales_channel_id",
        length: 255,
    }),
    __metadata("design:type", String)
], PublishableApiKeySalesChannel.prototype, "salesChannelId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], PublishableApiKeySalesChannel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], PublishableApiKeySalesChannel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], PublishableApiKeySalesChannel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PublishableApiKeySalesChannel.prototype, "deletedAt", void 0);
exports.PublishableApiKeySalesChannel = PublishableApiKeySalesChannel = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_-1d67bae40", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_-1d67bae40", ["id"], {}),
    (0, typeorm_1.Index)("IDX_publishable_key_id_-1d67bae40", ["publishableKeyId"], {}),
    (0, typeorm_1.Index)("publishable_api_key_sales_channel_pkey", ["publishableKeyId", "salesChannelId"], { unique: true }),
    (0, typeorm_1.Index)("IDX_sales_channel_id_-1d67bae40", ["salesChannelId"], {}),
    (0, typeorm_1.Entity)("publishable_api_key_sales_channel", { schema: "public" })
], PublishableApiKeySalesChannel);
//# sourceMappingURL=PublishableApiKeySalesChannel.js.map