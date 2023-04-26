import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { User } from './entities/user.entity';
import { Loaded } from '@mikro-orm/core';
export declare class UsersService {
    private readonly em;
    constructor(em: EntityManager);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<Loaded<User[]>>;
    findOne(id: number): Promise<Loaded<User>>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Loaded<User>>;
    remove(id: number): Promise<void>;
}
