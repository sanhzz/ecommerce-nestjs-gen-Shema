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
exports.ProviderIdentity = void 0;
const typeorm_1 = require("typeorm");
const AuthIdentity_1 = require("./AuthIdentity");
let ProviderIdentity = class ProviderIdentity {
    id;
    entityId;
    provider;
    authIdentityId;
    userMetadata;
    providerMetadata;
    createdAt;
    updatedAt;
    deletedAt;
    authIdentity;
};
exports.ProviderIdentity = ProviderIdentity;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "entity_id" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "auth_identity_id" }),
    __metadata("design:type", String)
], ProviderIdentity.prototype, "authIdentityId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "user_metadata", nullable: true }),
    __metadata("design:type", Object)
], ProviderIdentity.prototype, "userMetadata", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "provider_metadata", nullable: true }),
    __metadata("design:type", Object)
], ProviderIdentity.prototype, "providerMetadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProviderIdentity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ProviderIdentity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ProviderIdentity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AuthIdentity_1.AuthIdentity, (authIdentity) => authIdentity.providerIdentities, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "auth_identity_id", referencedColumnName: "id" }]),
    __metadata("design:type", AuthIdentity_1.AuthIdentity)
], ProviderIdentity.prototype, "authIdentity", void 0);
exports.ProviderIdentity = ProviderIdentity = __decorate([
    (0, typeorm_1.Index)("IDX_provider_identity_auth_identity_id", ["authIdentityId"], {}),
    (0, typeorm_1.Index)("IDX_provider_identity_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_provider_identity_provider_entity_id", ["entityId", "provider"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("provider_identity_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("provider_identity", { schema: "public" })
], ProviderIdentity);
//# sourceMappingURL=ProviderIdentity.js.map