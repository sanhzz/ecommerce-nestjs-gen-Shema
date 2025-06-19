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
exports.SalesChannel = void 0;
const typeorm_1 = require("typeorm");
let SalesChannel = class SalesChannel {
    id;
    name;
    description;
    isDisabled;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.SalesChannel = SalesChannel;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], SalesChannel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], SalesChannel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], SalesChannel.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_disabled", default: () => "false" }),
    __metadata("design:type", Boolean)
], SalesChannel.prototype, "isDisabled", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], SalesChannel.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], SalesChannel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], SalesChannel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], SalesChannel.prototype, "deletedAt", void 0);
exports.SalesChannel = SalesChannel = __decorate([
    (0, typeorm_1.Index)("IDX_sales_channel_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("sales_channel_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("sales_channel", { schema: "public" })
], SalesChannel);
//# sourceMappingURL=SalesChannel.js.map