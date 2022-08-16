import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { TweetsModule } from './tweets/tweets.module';
import { MurmursModule } from './murmurs/murmurs.module';
import { FollowersModule } from './followers/followers.module';

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
    MurmursModule,
    FollowersModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
