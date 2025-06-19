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
exports.ScriptMigrations = void 0;
const typeorm_1 = require("typeorm");
let ScriptMigrations = class ScriptMigrations {
    id;
    scriptName;
    createdAt;
    finishedAt;
};
exports.ScriptMigrations = ScriptMigrations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], ScriptMigrations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "script_name", length: 255 }),
    __metadata("design:type", String)
], ScriptMigrations.prototype, "scriptName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Object)
], ScriptMigrations.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "finished_at", nullable: true }),
    __metadata("design:type", Object)
], ScriptMigrations.prototype, "finishedAt", void 0);
exports.ScriptMigrations = ScriptMigrations = __decorate([
    (0, typeorm_1.Index)("script_migrations_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idx_script_name_unique", ["scriptName"], { unique: true }),
    (0, typeorm_1.Entity)("script_migrations", { schema: "public" })
], ScriptMigrations);
//# sourceMappingURL=ScriptMigrations.js.map