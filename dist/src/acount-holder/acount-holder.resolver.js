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
exports.AcountHolderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const acount_holder_service_1 = require("./acount-holder.service");
const AccountHolder_1 = require("../entities/entities/AccountHolder");
let AcountHolderResolver = class AcountHolderResolver {
    acountHolderService;
    constructor(acountHolderService) {
        this.acountHolderService = acountHolderService;
    }
    findAllAcount() {
        return this.acountHolderService.findAllAccountHolder();
    }
};
exports.AcountHolderResolver = AcountHolderResolver;
__decorate([
    (0, graphql_1.Query)(() => [AccountHolder_1.AccountHolder]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcountHolderResolver.prototype, "findAllAcount", null);
exports.AcountHolderResolver = AcountHolderResolver = __decorate([
    (0, graphql_1.Resolver)(() => AccountHolder_1.AccountHolder),
    __metadata("design:paramtypes", [acount_holder_service_1.AcountHolderService])
], AcountHolderResolver);
//# sourceMappingURL=acount-holder.resolver.js.map