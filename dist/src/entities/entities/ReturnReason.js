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
exports.ReturnReason = void 0;
const typeorm_1 = require("typeorm");
let ReturnReason = class ReturnReason {
    id;
    value;
    label;
    description;
    metadata;
    createdAt;
    updatedAt;
    deletedAt;
    parentReturnReason;
    returnReasons;
};
exports.ReturnReason = ReturnReason;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "id" }),
    __metadata("design:type", String)
], ReturnReason.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "value" }),
    __metadata("design:type", String)
], ReturnReason.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "label" }),
    __metadata("design:type", String)
], ReturnReason.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "description", nullable: true }),
    __metadata("design:type", Object)
], ReturnReason.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "metadata", nullable: true }),
    __metadata("design:type", Object)
], ReturnReason.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ReturnReason.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], ReturnReason.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], ReturnReason.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ReturnReason, (returnReason) => returnReason.returnReasons),
    (0, typeorm_1.JoinColumn)([{ name: "parent_return_reason_id", referencedColumnName: "id" }]),
    __metadata("design:type", ReturnReason)
], ReturnReason.prototype, "parentReturnReason", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReturnReason, (returnReason) => returnReason.parentReturnReason),
    __metadata("design:type", Array)
], ReturnReason.prototype, "returnReasons", void 0);
exports.ReturnReason = ReturnReason = __decorate([
    (0, typeorm_1.Index)("return_reason_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_return_reason_value", ["value"], { unique: true }),
    (0, typeorm_1.Entity)("return_reason", { schema: "public" })
], ReturnReason);
//# sourceMappingURL=ReturnReason.js.map