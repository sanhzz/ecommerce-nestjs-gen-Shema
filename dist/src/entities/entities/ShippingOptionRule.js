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
exports.ShippingOptionRule = void 0;
const typeorm_1 = require("typeorm");
const ShippingOption_1 = require("./ShippingOption");
let ShippingOptionRule = class ShippingOptionRule {
    id;
    attribute;
    operator;
    value;
    shippingOptionId;
    createdAt;
    updatedAt;
    deletedAt;
    shippingOption;
};
exports.ShippingOptionRule = ShippingOptionRule;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ShippingOptionRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "attribute" }),
    __metadata("design:type", String)
], ShippingOptionRule.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "operator" }),
    __metadata("design:type", String)
], ShippingOptionRule.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "value", nullable: true }),
    __metadata("design:type", Object)
], ShippingOptionRule.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "shipping_option_id" }),
    __metadata("design:type", String)
], ShippingOptionRule.prototype, "shippingOptionId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingOptionRule.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ShippingOptionRule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ShippingOptionRule.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ShippingOption_1.ShippingOption, (shippingOption) => shippingOption.shippingOptionRules, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "shipping_option_id", referencedColumnName: "id" }]),
    __metadata("design:type", ShippingOption_1.ShippingOption)
], ShippingOptionRule.prototype, "shippingOption", void 0);
exports.ShippingOptionRule = ShippingOptionRule = __decorate([
    (0, typeorm_1.Index)("IDX_shipping_option_rule_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("shipping_option_rule_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_shipping_option_rule_shipping_option_id", ["shippingOptionId"], {}),
    (0, typeorm_1.Entity)("shipping_option_rule", { schema: "public" })
], ShippingOptionRule);
//# sourceMappingURL=ShippingOptionRule.js.map