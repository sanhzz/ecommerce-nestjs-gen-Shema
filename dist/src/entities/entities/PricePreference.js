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
exports.PricePreference = void 0;
const typeorm_1 = require("typeorm");
let PricePreference = class PricePreference {
    id;
    attribute;
    value;
    isTaxInclusive;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.PricePreference = PricePreference;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PricePreference.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "attribute" }),
    __metadata("design:type", String)
], PricePreference.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "value", nullable: true }),
    __metadata("design:type", Object)
], PricePreference.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_tax_inclusive", default: () => "false" }),
    __metadata("design:type", Boolean)
], PricePreference.prototype, "isTaxInclusive", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PricePreference.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PricePreference.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PricePreference.prototype, "deletedAt", void 0);
exports.PricePreference = PricePreference = __decorate([
    (0, typeorm_1.Index)("IDX_price_preference_attribute_value", ["attribute", "value"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_price_preference_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("price_preference_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("price_preference", { schema: "public" })
], PricePreference);
//# sourceMappingURL=PricePreference.js.map