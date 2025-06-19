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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const CustomerAddress_1 = require("./CustomerAddress");
const CustomerGroupCustomer_1 = require("./CustomerGroupCustomer");
let Customer = class Customer {
    id;
    companyName;
    firstName;
    lastName;
    email;
    phone;
    hasAccount;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    createdBy;
    customerAddress;
    customerGroupCustomers;
};
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "company_name", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "first_name", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "last_name", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "email", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "phone", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "has_account", default: () => "false" }),
    __metadata("design:type", Boolean)
], Customer.prototype, "hasAccount", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Customer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], Customer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CustomerAddress_1.CustomerAddress, (customerAddress) => customerAddress.customer),
    __metadata("design:type", CustomerAddress_1.CustomerAddress)
], Customer.prototype, "customerAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CustomerGroupCustomer_1.CustomerGroupCustomer, (customerGroupCustomer) => customerGroupCustomer.customer),
    __metadata("design:type", Array)
], Customer.prototype, "customerGroupCustomers", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Index)("IDX_customer_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_customer_email_has_account_unique", ["email", "hasAccount"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("customer_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("customer", { schema: "public" })
], Customer);
//# sourceMappingURL=Customer.js.map