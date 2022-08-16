import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';
import { Tweets as TweetsEntity } from './entity/tweets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TweetsEntity])],
  controllers: [TweetsController],
  providers: [TweetsService],
  // exports: [TweetsService]
})
export class TweetsModule {}
