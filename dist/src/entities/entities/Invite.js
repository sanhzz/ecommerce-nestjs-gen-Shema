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
exports.Invite = void 0;
const typeorm_1 = require("typeorm");
let Invite = class Invite {
    id;
    email;
    accepted;
    token;
    expiresAt;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Invite = Invite;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Invite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "email" }),
    __metadata("design:type", String)
], Invite.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "accepted", default: () => "false" }),
    __metadata("design:type", Boolean)
], Invite.prototype, "accepted", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "token" }),
    __metadata("design:type", String)
], Invite.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "expires_at" }),
    __metadata("design:type", Date)
], Invite.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Invite.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Invite.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Invite.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Invite.prototype, "deletedAt", void 0);
exports.Invite = Invite = __decorate([
    (0, typeorm_1.Index)("IDX_invite_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_invite_email_unique", ["email"], { unique: true }),
    (0, typeorm_1.Index)("invite_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_invite_token", ["token"], {}),
    (0, typeorm_1.Entity)("invite", { schema: "public" })
], Invite);
//# sourceMappingURL=Invite.js.map