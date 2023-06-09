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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nestjs_1 = require("@mikro-orm/nestjs");
const users_module_1 = require("./users/users.module");
const songs_module_1 = require("./songs/songs.module");
const playlists_module_1 = require("./playlists/playlists.module");
const ApiAuth_middleware_1 = require("./middleware/ApiAuth.middleware");
const Context_middleware_1 = require("./middleware/Context.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(Context_middleware_1.MiddlewareContext, ApiAuth_middleware_1.ApiAuth)
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_1.MikroOrmModule.forRoot(),
            users_module_1.UsersModule,
            songs_module_1.SongsModule,
            playlists_module_1.PlaylistsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map