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
exports.ReturnFulfillment = void 0;
const typeorm_1 = require("typeorm");
let ReturnFulfillment = class ReturnFulfillment {
    returnId;
    fulfillmentId;
    id;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.ReturnFulfillment = ReturnFulfillment;
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "return_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ReturnFulfillment.prototype, "returnId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "fulfillment_id",
        length: 255,
    }),
    __metadata("design:type", String)
], ReturnFulfillment.prototype, "fulfillmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id", length: 255 }),
    __metadata("design:type", String)
], ReturnFulfillment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ReturnFulfillment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ReturnFulfillment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ReturnFulfillment.prototype, "deletedAt", void 0);
exports.ReturnFulfillment = ReturnFulfillment = __decorate([
    (0, typeorm_1.Index)("IDX_deleted_at_-31ea43a", ["deletedAt"], {}),
    (0, typeorm_1.Index)("return_fulfillment_pkey", ["fulfillmentId", "returnId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_fulfillment_id_-31ea43a", ["fulfillmentId"], {}),
    (0, typeorm_1.Index)("IDX_id_-31ea43a", ["id"], {}),
    (0, typeorm_1.Index)("IDX_return_id_-31ea43a", ["returnId"], {}),
    (0, typeorm_1.Entity)("return_fulfillment", { schema: "public" })
], ReturnFulfillment);
//# sourceMappingURL=ReturnFulfillment.js.map