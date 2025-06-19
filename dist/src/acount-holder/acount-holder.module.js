"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcountHolderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const acount_holder_service_1 = require("./acount-holder.service");
const acount_holder_resolver_1 = require("./acount-holder.resolver");
const AccountHolder_1 = require("../entities/entities/AccountHolder");
let AcountHolderModule = class AcountHolderModule {
};
exports.AcountHolderModule = AcountHolderModule;
exports.AcountHolderModule = AcountHolderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([AccountHolder_1.AccountHolder])],
        providers: [acount_holder_resolver_1.AcountHolderResolver, acount_holder_service_1.AcountHolderService],
    })
], AcountHolderModule);
//# sourceMappingURL=acount-holder.module.js.map