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
exports.PriceList = void 0;
const typeorm_1 = require("typeorm");
const Price_1 = require("./Price");
const PriceListRule_1 = require("./PriceListRule");
let PriceList = class PriceList {
    id;
    status;
    startsAt;
    endsAt;
    rulesCount;
    title;
    description;
    type;
    createdAt;
    updatedAt;
    deletedAt;
    prices;
    priceListRules;
};
exports.PriceList = PriceList;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PriceList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'draft'" }),
    __metadata("design:type", String)
], PriceList.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "starts_at", nullable: true }),
    __metadata("design:type", Object)
], PriceList.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "ends_at", nullable: true }),
    __metadata("design:type", Object)
], PriceList.prototype, "endsAt", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", {
        name: "rules_count",
        nullable: true,
        default: () => "0",
    }),
    __metadata("design:type", Object)
], PriceList.prototype, "rulesCount", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "title" }),
    __metadata("design:type", String)
], PriceList.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description" }),
    __metadata("design:type", String)
], PriceList.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "type", default: () => "'sale'" }),
    __metadata("design:type", String)
], PriceList.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceList.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PriceList.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Price_1.Price, (price) => price.priceList),
    __metadata("design:type", Array)
], PriceList.prototype, "prices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PriceListRule_1.PriceListRule, (priceListRule) => priceListRule.priceList),
    __metadata("design:type", Array)
], PriceList.prototype, "priceListRules", void 0);
exports.PriceList = PriceList = __decorate([
    (0, typeorm_1.Index)("IDX_price_list_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("price_list_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("price_list", { schema: "public" })
], PriceList);
//# sourceMappingURL=PriceList.js.map