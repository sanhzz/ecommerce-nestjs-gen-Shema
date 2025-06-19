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
exports.Currency = void 0;
const typeorm_1 = require("typeorm");
let Currency = class Currency {
    code;
    symbol;
    symbolNative;
    decimalDigits;
    rounding;
    rawRounding;
    name;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Currency = Currency;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "code" }),
    __metadata("design:type", String)
], Currency.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "symbol" }),
    __metadata("design:type", String)
], Currency.prototype, "symbol", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "symbol_native" }),
    __metadata("design:type", String)
], Currency.prototype, "symbolNative", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "decimal_digits", default: () => "0" }),
    __metadata("design:type", Number)
], Currency.prototype, "decimalDigits", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "rounding", default: () => "0" }),
    __metadata("design:type", String)
], Currency.prototype, "rounding", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_rounding" }),
    __metadata("design:type", Object)
], Currency.prototype, "rawRounding", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "name" }),
    __metadata("design:type", String)
], Currency.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Currency.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Currency.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Currency.prototype, "deletedAt", void 0);
exports.Currency = Currency = __decorate([
    (0, typeorm_1.Index)("currency_pkey", ["code"], { unique: true }),
    (0, typeorm_1.Entity)("currency", { schema: "public" })
], Currency);
//# sourceMappingURL=Currency.js.map