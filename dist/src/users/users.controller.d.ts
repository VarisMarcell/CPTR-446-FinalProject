import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Loaded } from '@mikro-orm/core';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<Loaded<User[]>>;
    findOne(id: string): Promise<Loaded<User, never>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<Loaded<User, never>>;
    remove(id: string): Promise<void>;
}
