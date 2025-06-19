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
exports.PriceSet = void 0;
const typeorm_1 = require("typeorm");
const Price_1 = require("./Price");
let PriceSet = class PriceSet {
    id;
    createdAt;
    updatedAt;
    deletedAt;
    prices;
};
exports.PriceSet = PriceSet;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], PriceSet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceSet.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceSet.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], PriceSet.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Price_1.Price, (price) => price.priceSet),
    __metadata("design:type", Array)
], PriceSet.prototype, "prices", void 0);
exports.PriceSet = PriceSet = __decorate([
    (0, typeorm_1.Index)("IDX_price_set_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("price_set_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("price_set", { schema: "public" })
], PriceSet);
//# sourceMappingURL=PriceSet.js.map