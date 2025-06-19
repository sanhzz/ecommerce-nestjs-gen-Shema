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
exports.LinkModuleMigrations = void 0;
const typeorm_1 = require("typeorm");
let LinkModuleMigrations = class LinkModuleMigrations {
    id;
    tableName;
    linkDescriptor;
    createdAt;
};
exports.LinkModuleMigrations = LinkModuleMigrations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], LinkModuleMigrations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "table_name",
        unique: true,
        length: 255,
    }),
    __metadata("design:type", String)
], LinkModuleMigrations.prototype, "tableName", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "link_descriptor", default: {} }),
    __metadata("design:type", Object)
], LinkModuleMigrations.prototype, "linkDescriptor", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Object)
], LinkModuleMigrations.prototype, "createdAt", void 0);
exports.LinkModuleMigrations = LinkModuleMigrations = __decorate([
    (0, typeorm_1.Index)("link_module_migrations_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("link_module_migrations_table_name_key", ["tableName"], { unique: true }),
    (0, typeorm_1.Entity)("link_module_migrations", { schema: "public" })
], LinkModuleMigrations);
//# sourceMappingURL=LinkModuleMigrations.js.map