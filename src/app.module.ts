import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import progress_dbConfig from './config/progress_dbConfig';

import { HelloResolver } from './1helloworld.resolver';
import { AcountHolderModule } from './acount-holder/acount-holder.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [progress_dbConfig],
        }),

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
            // playground: process.env.NODE_ENV !== 'production',
            sortSchema: true,
            introspection: true,
            context: ({ req }: { req: Request }) => ({ req }),
        }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('POSTGRES_HOST'),
                port: configService.get<number>('POSTGRES_PORT'),
                username: configService.get<string>('POSTGRES_USER'),
                password: configService.get<string>('POSTGRES_PASSWORD'),
                database: configService.get<string>('POSTGRES_DB'),
                autoLoadEntities: true,
                synchronize: false, // ❗ Disable in production
                // entities: ['src/entities/**/*.entity.{ts,js}'],
                entities: ['dist/**/*.entity.js'],
                migrations: ['src/migrations/**/*.{ts,js}'],
            }),
        }),

        AcountHolderModule,


    ],
    providers: [HelloResolver],
})
export class AppModule { }
