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
exports.CustomerAddress = void 0;
const typeorm_1 = require("typeorm");
const Customer_1 = require("./Customer");
let CustomerAddress = class CustomerAddress {
    id;
    customerId;
    addressName;
    isDefaultShipping;
    isDefaultBilling;
    company;
    firstName;
    lastName;
    address_1;
    address_2;
    city;
    countryCode;
    province;
    postalCode;
    phone;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    customer;
};
exports.CustomerAddress = CustomerAddress;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "customer_id" }),
    __metadata("design:type", String)
], CustomerAddress.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_name", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "addressName", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_default_shipping", default: () => "false" }),
    __metadata("design:type", Boolean)
], CustomerAddress.prototype, "isDefaultShipping", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_default_billing", default: () => "false" }),
    __metadata("design:type", Boolean)
], CustomerAddress.prototype, "isDefaultBilling", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "company", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "first_name", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "last_name", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_1", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "address_1", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address_2", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "address_2", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "city", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "country_code", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "province", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "postal_code", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "phone", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CustomerAddress.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], CustomerAddress.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], CustomerAddress.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Customer_1.Customer, (customer) => customer.customerAddress, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customer_1.Customer)
], CustomerAddress.prototype, "customer", void 0);
exports.CustomerAddress = CustomerAddress = __decorate([
    (0, typeorm_1.Index)("IDX_customer_address_unique_customer_shipping", ["customerId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_customer_address_unique_customer_billing", ["customerId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_customer_address_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("IDX_customer_address_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("customer_address_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("customer_address", { schema: "public" })
], CustomerAddress);
//# sourceMappingURL=CustomerAddress.js.map