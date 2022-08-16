import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMurmursDto } from './dto/create-murmurs.dto';
import { Murmurs as MurmursEntity } from './entity/murmurs.entity';

@Injectable()
export class MurmursService {
    constructor(
        @InjectRepository(MurmursEntity)
        private readonly murmursRepository: Repository<MurmursEntity>
      ) { }
    
    
      /**
       * Create a new Tweets entity
       * @param murmurs 
       * @returns 
       */
      async create(murmurs: CreateMurmursDto): Promise<MurmursEntity> {
        const newTweet = new MurmursEntity();
    
        Object.keys(murmurs).forEach((key) => {
          newTweet[key] = murmurs[key];
        });
    
        try {
          return await this.murmursRepository.save(newTweet);
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Update Tweet
       * @param id 
       * @param murmurs 
       * @returns 
       */
      async update(id:string, murmurs: CreateMurmursDto){
        const newTweet = new MurmursEntity();
    
        Object.keys(murmurs).forEach((key) => {
          newTweet[key] = murmurs[key];
        });
    
        try {
          return await this.murmursRepository.update(id, newTweet);
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Find all Tweets
       * @returns 
       */
      async findAll(): Promise<MurmursEntity[]> {
        try {
          return await this.murmursRepository.find({});
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Find murmurs by id
       * @param id 
       * @returns 
       */
      async findOne(id: string): Promise<MurmursEntity> {
        try {
          return await this.murmursRepository.findOne({where: {id: id}});
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Get all murmur by tweetId
       * @param tweetId 
       * @returns 
       */
      async getMurmurByTweetId(tweetId: string): Promise<MurmursEntity[]> {
        try {
          return await this.murmursRepository.find({where: {tweetId: tweetId}});
        } catch (err) {
          return err;
        }
      }
    
    
      /**
       * Delete murmurs by id
       * @param id 
       * @returns 
       */
      async delete(id: string) {
        try {
          return await this.murmursRepository.delete(id);
        } catch (err) {
          return err;
        }
      }
}
