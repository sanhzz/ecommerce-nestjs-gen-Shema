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
exports.AccountHolder = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const graphql_type_json_1 = require("graphql-type-json");
let AccountHolder = class AccountHolder {
    id;
    providerId;
    externalId;
    email;
    data;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.AccountHolder = AccountHolder;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], AccountHolder.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)("text", { name: "provider_id" }),
    __metadata("design:type", String)
], AccountHolder.prototype, "providerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)("text", { name: "external_id" }),
    __metadata("design:type", String)
], AccountHolder.prototype, "externalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)("text", { name: "email", nullable: true }),
    __metadata("design:type", Object)
], AccountHolder.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default),
    (0, typeorm_1.Column)("jsonb", { name: "data", default: {} }),
    __metadata("design:type", Object)
], AccountHolder.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default, { nullable: true }),
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], AccountHolder.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", default: () => "now()" }),
    __metadata("design:type", Date)
], AccountHolder.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_at", default: () => "now()" }),
    __metadata("design:type", Date)
], AccountHolder.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], AccountHolder.prototype, "deletedAt", void 0);
exports.AccountHolder = AccountHolder = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Index)("IDX_account_holder_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_account_holder_provider_id_external_id_unique", ["externalId", "providerId"], { unique: true }),
    (0, typeorm_1.Index)("account_holder_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("account_holder", { schema: "public" })
], AccountHolder);
//# sourceMappingURL=AccountHolder.js.map