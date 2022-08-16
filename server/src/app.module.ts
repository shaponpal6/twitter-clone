import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { TweetsModule } from './tweets/tweets.module';
import { MurmursModule } from './murmurs/murmurs.module';
import { FollowersModule } from './followers/followers.module';
import { UsersModule } from './users/users.module';

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
    FollowersModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
