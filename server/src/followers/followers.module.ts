import { Module } from '@nestjs/common';
import { FollowersController } from './followers.controller';
import { FollowersService } from './followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followers as FollowersEntity } from './entity/followers.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FollowersEntity])],
  controllers: [FollowersController],
  providers: [FollowersService],
})
export class FollowersModule {}
