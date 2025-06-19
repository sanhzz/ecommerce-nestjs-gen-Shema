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
exports.CustomerAccountHolder = void 0;
const typeorm_1 = require("typeorm");
let CustomerAccountHolder = class CustomerAccountHolder {
    customerId;
    accountHolderId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.CustomerAccountHolder = CustomerAccountHolder;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "customer_id",
        length: 255,
    }),
    __metadata("design:type", String)
], CustomerAccountHolder.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "account_holder_id",
        length: 255,
    }),
    __metadata("design:type", String)
], CustomerAccountHolder.prototype, "accountHolderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], CustomerAccountHolder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CustomerAccountHolder.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CustomerAccountHolder.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CustomerAccountHolder.prototype, "deletedAt", void 0);
exports.CustomerAccountHolder = CustomerAccountHolder = __decorate([
    (0, typeorm_1.Index)("customer_account_holder_pkey", ["accountHolderId", "customerId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_account_holder_id_5cb3a0c0", ["accountHolderId"], {}),
    (0, typeorm_1.Index)("IDX_customer_id_5cb3a0c0", ["customerId"], {}),
    (0, typeorm_1.Index)("IDX_deleted_at_5cb3a0c0", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_id_5cb3a0c0", ["id"], {}),
    (0, typeorm_1.Entity)("customer_account_holder", { schema: "public" })
], CustomerAccountHolder);
//# sourceMappingURL=CustomerAccountHolder.js.map