import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users as UsersEntity } from './entity/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) { }


    /**
    * Create a new User entity
    * @param user 
    * @returns 
    */
    async create(user: CreateUserDto): Promise<UsersEntity> {
        const newUser = new UsersEntity();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.usersRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }


    /**
    * Update User by id
    * @param id 
    * @param user 
    * @returns 
    */
    async update(id: string, user: CreateUserDto) {
        const newUser = new UsersEntity();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.usersRepository.update(id, newUser);
        } catch (err) {
            return err;
        }
    }


    /**
    * Find all User
    * @returns 
    */
    async findAll(): Promise<UsersEntity[]> {
        try {
            return await this.usersRepository.find({});
        } catch (err) {
            return err;
        }
    }


    /**
    * Find user by id
    * @param id 
    * @returns 
    */
    async findOne(id: string): Promise<UsersEntity> {
        try {
            return await this.usersRepository.findOne({ where: { id: id } });
        } catch (err) {
            return err;
        }
    }


    /**
    * Get all User by userId
    * @param userId 
    * @returns 
    */
    async getTweetByUserId(userId: string): Promise<UsersEntity[]> {
        try {
            return await this.usersRepository.find({ where: { id: userId } });
        } catch (err) {
            return err;
        }
    }


    /**
    * Delete user by id
    * @param id 
    * @returns 
    */
    async delete(id: string) {
        try {
            return await this.usersRepository.delete(id);
        } catch (err) {
            return err;
        }
    }
}
