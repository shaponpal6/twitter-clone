import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MurmursController } from './murmurs/murmurs.controller';
import { MurmursService } from './murmurs/murmurs.service';
import { TweetsService } from './tweets/tweets.service';
import { TweetsController } from './tweets/tweets.controller';
import { FollowsController } from './follows/follows.controller';
import { FollowsService } from './follows/follows.service';

@Module({
  imports: [],
  controllers: [AppController, MurmursController, TweetsController, FollowsController],
  providers: [AppService, MurmursService, TweetsService, FollowsService],
})
export class AppModule {}
