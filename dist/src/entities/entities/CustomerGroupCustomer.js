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
exports.CustomerGroupCustomer = void 0;
const typeorm_1 = require("typeorm");
const CustomerGroup_1 = require("./CustomerGroup");
const Customer_1 = require("./Customer");
let CustomerGroupCustomer = class CustomerGroupCustomer {
    id;
    customerId;
    customerGroupId;
    metadata;
    createdAt;
    updatedAt;
    createdBy;
    deletedAt;
    customerGroup;
    customer;
};
exports.CustomerGroupCustomer = CustomerGroupCustomer;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CustomerGroupCustomer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "customer_id" }),
    __metadata("design:type", String)
], CustomerGroupCustomer.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "customer_group_id" }),
    __metadata("design:type", String)
], CustomerGroupCustomer.prototype, "customerGroupId", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CustomerGroupCustomer.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CustomerGroupCustomer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CustomerGroupCustomer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "created_by", nullable: true }),
    __metadata("design:type", Object)
], CustomerGroupCustomer.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CustomerGroupCustomer.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CustomerGroup_1.CustomerGroup, (customerGroup) => customerGroup.customerGroupCustomers, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "customer_group_id", referencedColumnName: "id" }]),
    __metadata("design:type", CustomerGroup_1.CustomerGroup)
], CustomerGroupCustomer.prototype, "customerGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customer_1.Customer, (customer) => customer.customerGroupCustomers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customer_1.Customer)
], CustomerGroupCustomer.prototype, "customer", void 0);
exports.CustomerGroupCustomer = CustomerGroupCustomer = __decorate([
    (0, typeorm_1.Index)("IDX_customer_group_customer_customer_group_id", ["customerGroupId"], {}),
    (0, typeorm_1.Index)("IDX_customer_group_customer_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("IDX_customer_group_customer_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("customer_group_customer_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("customer_group_customer", { schema: "public" })
], CustomerGroupCustomer);
//# sourceMappingURL=CustomerGroupCustomer.js.map