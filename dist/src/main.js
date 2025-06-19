"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Bootstrap');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const dataSource = app.get(typeorm_1.DataSource);
    if (dataSource.isInitialized) {
        logger.log('✅ Database connection established successfully');
    }
    else {
        logger.error('❌ Database connection failed');
        process.exit(1);
    }
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    const port = parseInt(process.env.PORT || '4000', 10);
    await app.listen(port);
    logger.log(`🚀 Server is running at: http://localhost:${port}/graphql`);
}
bootstrap();
//# sourceMappingURL=main.js.map