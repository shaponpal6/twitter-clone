import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MurmursController } from './murmurs/murmurs.controller';
import { MurmursService } from './murmurs/murmurs.service';
import { FollowsController } from './follows/follows.controller';
import { FollowsService } from './follows/follows.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { TweetsModule } from './tweets/tweets.module';
import { MurmursModule } from './murmurs/murmurs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'murmurs_db',
      entities: entities,
      synchronize: true,
    }),
    TweetsModule,
    MurmursModule
  ],
  controllers: [AppController, FollowsController, UsersController],
  providers: [AppService, FollowsService, UsersService],
})
export class AppModule {}
