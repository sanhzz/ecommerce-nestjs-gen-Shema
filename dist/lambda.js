"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_serverless_express_1 = require("aws-serverless-express");
const app_module_1 = require("./src/app.module");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
let cachedServer;
async function bootstrapServer() {
    if (!cachedServer) {
        const expressApp = express();
        const adapter = new platform_express_1.ExpressAdapter(expressApp);
        const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter);
        await app.init();
        cachedServer = (0, aws_serverless_express_1.createServer)(expressApp);
    }
    return cachedServer;
}
const handler = async (event, context, callback) => {
    const server = await bootstrapServer();
    return (0, aws_serverless_express_1.proxy)(server, event, context, 'PROMISE').promise;
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map