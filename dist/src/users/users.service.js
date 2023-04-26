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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mysql_1 = require("@mikro-orm/mysql");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(em) {
        this.em = em;
    }
    async create(createUserDto) {
        const user = new user_entity_1.User(createUserDto);
        await this.em.persistAndFlush(user);
        this.em.populate(user, ['apiKey']);
        return user;
    }
    findAll() {
        return this.em.find(user_entity_1.User, {});
    }
    async findOne(id) {
        try {
            const user = await this.em.findOneOrFail(user_entity_1.User, { id: id });
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundException(`User with id ${id} not found.`);
        }
    }
    async update(id, updateUserDto) {
        try {
            const existingUser = await this.em.findOneOrFail(user_entity_1.User, { id: id });
            if (updateUserDto.userName) {
                existingUser.userName = updateUserDto.userName;
            }
            if (updateUserDto.firstName) {
                existingUser.firstName = updateUserDto.firstName;
            }
            if (updateUserDto.lastName) {
                existingUser.lastName = updateUserDto.lastName;
            }
            await this.em.persistAndFlush(existingUser);
            return existingUser;
        }
        catch (error) {
            throw new common_1.NotFoundException(`User with id ${id} not found.`);
        }
    }
    async remove(id) {
        this.em.removeAndFlush(this.em.getReference(user_entity_1.User, id));
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_1.EntityManager])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map