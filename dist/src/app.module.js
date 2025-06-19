"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const progress_dbConfig_1 = require("./config/progress_dbConfig");
const _1helloworld_resolver_1 = require("./1helloworld.resolver");
const acount_holder_module_1 = require("./acount-holder/acount-holder.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [progress_dbConfig_1.default],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                playground: true,
                sortSchema: true,
                introspection: true,
                context: ({ req }) => ({ req }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DB'),
                    autoLoadEntities: true,
                    synchronize: false,
                    entities: ['dist/**/*.entity.js'],
                    migrations: ['src/migrations/**/*.{ts,js}'],
                }),
            }),
            acount_holder_module_1.AcountHolderModule,
        ],
        providers: [_1helloworld_resolver_1.HelloResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map