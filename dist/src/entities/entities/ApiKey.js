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
exports.ApiKey = void 0;
const typeorm_1 = require("typeorm");
let ApiKey = class ApiKey {
    id;
    token;
    salt;
    redacted;
    title;
    type;
    lastUsedAt;
    createdBy;
    createdAt;
    revokedBy;
    revokedAt;
    updatedAt;
    deletedAt;
};
exports.ApiKey = ApiKey;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ApiKey.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "token" }),
    __metadata("design:type", String)
], ApiKey.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "salt" }),
    __metadata("design:type", String)
], ApiKey.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "redacted" }),
    __metadata("design:type", String)
], ApiKey.prototype, "redacted", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], ApiKey.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type" }),
    __metadata("design:type", String)
], ApiKey.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "last_used_at", nullable: true }),
    __metadata("design:type", Object)
], ApiKey.prototype, "lastUsedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by" }),
    __metadata("design:type", String)
], ApiKey.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ApiKey.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "revoked_by", nullable: true }),
    __metadata("design:type", Object)
], ApiKey.prototype, "revokedBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "revoked_at", nullable: true }),
    __metadata("design:type", Object)
], ApiKey.prototype, "revokedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ApiKey.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ApiKey.prototype, "deletedAt", void 0);
exports.ApiKey = ApiKey = __decorate([
    (0, typeorm_1.Index)("IDX_api_key_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("api_key_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_api_key_token_unique", ["token"], { unique: true }),
    (0, typeorm_1.Index)("IDX_api_key_type", ["type"], {}),
    (0, typeorm_1.Entity)("api_key", { schema: "public" })
], ApiKey);
//# sourceMappingURL=ApiKey.js.map