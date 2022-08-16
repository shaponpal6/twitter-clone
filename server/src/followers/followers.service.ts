import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFollowersDto } from './dto/create-followers.dto'
import { Followers as FollowersEntity } from './entity/followers.entity';

@Injectable()
export class FollowersService {
    constructor(
        @InjectRepository(FollowersEntity)
        private readonly followersRepository: Repository<FollowersEntity>
      ) { }
    
    
      /**
       * Create a new Follower entity
       * @param followers 
       * @returns 
       */
      async create(followers: CreateFollowersDto): Promise<FollowersEntity> {
        const newFollower = new FollowersEntity();
    
        Object.keys(followers).forEach((key) => {
          newFollower[key] = followers[key];
        });
    
        try {
          return await this.followersRepository.save(newFollower);
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Update Follower
       * @param id 
       * @param followers 
       * @returns 
       */
      async update(id:string, followers: CreateFollowersDto){
        const newFollower = new FollowersEntity();
    
        Object.keys(followers).forEach((key) => {
          newFollower[key] = followers[key];
        });
    
        try {
          return await this.followersRepository.update(id, newFollower);
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Find all Follower
       * @returns 
       */
      async findAll(): Promise<FollowersEntity[]> {
        try {
          return await this.followersRepository.find({});
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Get all Follower by userId
       * @param userId 
       * @returns 
       */
      async getFollowersByUserId(userId: string): Promise<FollowersEntity[]> {
        try {
          return await this.followersRepository.find({where: {userId: userId}});
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Delete followers by id
       * @param id 
       * @returns 
       */
      async delete(id: string) {
        try {
          return await this.followersRepository.delete(id);
        } catch (err) {
          return err;
        }
      }
}
