"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const progress_dbConfig = () => {
    return {
        POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
        POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || '5432', 10),
        POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'password',
        POSTGRES_DB: process.env.POSTGRES_DB || 'medusa_db',
    };
};
exports.default = progress_dbConfig;
//# sourceMappingURL=progress_dbConfig.js.map