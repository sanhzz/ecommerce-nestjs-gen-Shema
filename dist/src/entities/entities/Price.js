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
exports.Price = void 0;
const typeorm_1 = require("typeorm");
const PriceList_1 = require("./PriceList");
const PriceSet_1 = require("./PriceSet");
const PriceRule_1 = require("./PriceRule");
let Price = class Price {
    id;
    title;
    priceSetId;
    currencyCode;
    rawAmount;
    rulesCount;
    createdAt;
    updatedAt;
    deletedAt;
    priceListId;
    amount;
    minQuantity;
    maxQuantity;
    priceList;
    priceSet;
    priceRules;
};
exports.Price = Price;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Price.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title", nullable: true }),
    __metadata("design:type", Object)
], Price.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "price_set_id" }),
    __metadata("design:type", String)
], Price.prototype, "priceSetId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "currency_code" }),
    __metadata("design:type", String)
], Price.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "raw_amount" }),
    __metadata("design:type", Object)
], Price.prototype, "rawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", {
        name: "rules_count",
        nullable: true,
        default: () => "0",
    }),
    __metadata("design:type", Object)
], Price.prototype, "rulesCount", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Price.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Price.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Price.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "price_list_id", nullable: true }),
    __metadata("design:type", Object)
], Price.prototype, "priceListId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "amount" }),
    __metadata("design:type", String)
], Price.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "min_quantity", nullable: true }),
    __metadata("design:type", Object)
], Price.prototype, "minQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "max_quantity", nullable: true }),
    __metadata("design:type", Object)
], Price.prototype, "maxQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PriceList_1.PriceList, (priceList) => priceList.prices, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "price_list_id", referencedColumnName: "id" }]),
    __metadata("design:type", PriceList_1.PriceList)
], Price.prototype, "priceList", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PriceSet_1.PriceSet, (priceSet) => priceSet.prices, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "price_set_id", referencedColumnName: "id" }]),
    __metadata("design:type", PriceSet_1.PriceSet)
], Price.prototype, "priceSet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PriceRule_1.PriceRule, (priceRule) => priceRule.price),
    __metadata("design:type", Array)
], Price.prototype, "priceRules", void 0);
exports.Price = Price = __decorate([
    (0, typeorm_1.Index)("IDX_price_currency_code", ["currencyCode"], {}),
    (0, typeorm_1.Index)("IDX_price_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("price_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_price_price_list_id", ["priceListId"], {}),
    (0, typeorm_1.Index)("IDX_price_price_set_id", ["priceSetId"], {}),
    (0, typeorm_1.Entity)("price", { schema: "public" })
], Price);
//# sourceMappingURL=Price.js.map