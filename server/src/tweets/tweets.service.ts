import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweets } from './interfaces/tweets.interface';
import { CreateTweetsDto } from './dto/create-tweets.dto';
import { Tweets as TweetsEntity } from './entity/tweets.entity';

@Injectable()
export class TweetsService {

  constructor(
    @InjectRepository(TweetsEntity)
    private readonly tweetsRepository: Repository<TweetsEntity>
  ) { }


  /**
   * Create a new Tweets entity
   * @param tweet 
   * @returns 
   */
  async create(tweet: CreateTweetsDto): Promise<TweetsEntity> {
    const newTweet = new TweetsEntity();

    Object.keys(tweet).forEach((key) => {
      newTweet[key] = tweet[key];
    });

    try {
      return await this.tweetsRepository.save(newTweet);
    } catch (err) {
      return err;
    }
  }


  /**
   * Update Tweet
   * @param id 
   * @param tweet 
   * @returns 
   */
  async update(id:string, tweet: CreateTweetsDto){
    const newTweet = new TweetsEntity();

    Object.keys(tweet).forEach((key) => {
      newTweet[key] = tweet[key];
    });

    try {
      return await this.tweetsRepository.update(id, newTweet);
    } catch (err) {
      return err;
    }
  }


  /**
   * Find all Tweets
   * @returns 
   */
  async findAll(): Promise<TweetsEntity[]> {
    try {
      return await this.tweetsRepository.find({});
    } catch (err) {
      return err;
    }
  }


  /**
   * Find tweet by id
   * @param id 
   * @returns 
   */
  async findOne(id: string): Promise<TweetsEntity> {
    try {
      return await this.tweetsRepository.findOne({where: {id: id}});
    } catch (err) {
      return err;
    }
  }


  /**
   * Get all Tweets by userId
   * @param userId 
   * @returns 
   */
  async getTweetByUserId(userId: string): Promise<TweetsEntity[]> {
    try {
      return await this.tweetsRepository.find({where: {author: userId}});
    } catch (err) {
      return err;
    }
  }


  /**
   * Delete tweet by id
   * @param id 
   * @returns 
   */
  async delete(id: string) {
    try {
      return await this.tweetsRepository.delete(id);
    } catch (err) {
      return err;
    }
  }
}
