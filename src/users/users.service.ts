import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from '@mikro-orm/mysql';
import { User } from './entities/user.entity';
import { Loaded } from '@mikro-orm/core';


@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User(createUserDto)

    await this.em.persistAndFlush(user)
    this.em.populate(user, ['apiKey'])
    return user
  }

  findAll(): Promise<Loaded<User[]>> {
    return this.em.find(User, {})
  }

  async findOne(id: number): Promise<Loaded<User>> {
    try {
      const user = await this.em.findOneOrFail(User, {id: id})
      return user
    } catch (error) {
      throw new NotFoundException(`User with id ${id} not found.`)
    }
  
  
    // return this.em.findOneOrFail(User, {id: id})
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Loaded<User>> {
    try {
      const existingUser = await this.em.findOneOrFail(User, {id: id})
      
      if (updateUserDto.userName) {
        existingUser.userName = updateUserDto.userName
      }
      if (updateUserDto.firstName) {
        existingUser.firstName = updateUserDto.firstName
      }
      if (updateUserDto.lastName) {
        existingUser.lastName = updateUserDto.lastName
      }
   
      await this.em.persistAndFlush(existingUser)
      return existingUser


    } catch (error) {
      throw new NotFoundException(`User with id ${id} not found.`)
    }
  }

  
  async remove(id: number): Promise<void> {
    this.em.removeAndFlush(this.em.getReference(User, id))
  }
}
