"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const dotenv = require("dotenv");
dotenv.config({
    path: `./${process.env.NODE_ENV}.env`
});
const config = {
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: process.env.DB_NAME,
    port: +process.env.DB_PORT || 3308,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    type: 'mysql',
    metadataProvider: core_1.ReflectMetadataProvider,
    debug: true,
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map