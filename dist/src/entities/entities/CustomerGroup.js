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
exports.CustomerGroup = void 0;
const typeorm_1 = require("typeorm");
const CustomerGroupCustomer_1 = require("./CustomerGroupCustomer");
let CustomerGroup = class CustomerGroup {
    id;
    name;
    metadata;
    createdBy;
    createdAt;
    updatedAt;
    deletedAt;
    customerGroupCustomers;
};
exports.CustomerGroup = CustomerGroup;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CustomerGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], CustomerGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CustomerGroup.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], CustomerGroup.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CustomerGroup.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CustomerGroup.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CustomerGroup.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CustomerGroupCustomer_1.CustomerGroupCustomer, (customerGroupCustomer) => customerGroupCustomer.customerGroup),
    __metadata("design:type", Array)
], CustomerGroup.prototype, "customerGroupCustomers", void 0);
exports.CustomerGroup = CustomerGroup = __decorate([
    (0, typeorm_1.Index)("IDX_customer_group_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("customer_group_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_customer_group_name", ["name"], { unique: true }),
    (0, typeorm_1.Index)("IDX_customer_group_name_unique", ["name"], { unique: true }),
    (0, typeorm_1.Entity)("customer_group", { schema: "public" })
], CustomerGroup);
//# sourceMappingURL=CustomerGroup.js.map