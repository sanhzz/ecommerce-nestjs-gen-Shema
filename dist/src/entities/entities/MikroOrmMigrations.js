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
exports.MikroOrmMigrations = void 0;
const typeorm_1 = require("typeorm");
let MikroOrmMigrations = class MikroOrmMigrations {
    id;
    name;
    executedAt;
};
exports.MikroOrmMigrations = MikroOrmMigrations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MikroOrmMigrations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", Object)
], MikroOrmMigrations.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "executed_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Object)
], MikroOrmMigrations.prototype, "executedAt", void 0);
exports.MikroOrmMigrations = MikroOrmMigrations = __decorate([
    (0, typeorm_1.Index)("mikro_orm_migrations_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mikro_orm_migrations", { schema: "public" })
], MikroOrmMigrations);
//# sourceMappingURL=MikroOrmMigrations.js.map