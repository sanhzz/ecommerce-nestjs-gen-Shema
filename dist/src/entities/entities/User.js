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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
    id;
    firstName;
    lastName;
    email;
    avatarUrl;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "first_name", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "last_name", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "email" }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "avatar_url", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "deletedAt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Index)("IDX_user_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_user_email_unique", ["email"], { unique: true }),
    (0, typeorm_1.Index)("user_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("user", { schema: "public" })
], User);
//# sourceMappingURL=User.js.map