import { Module } from '@nestjs/common';
import { FollowsController } from './follows.controller';
import { FollowsService } from './follows.service';

@Module({
  imports: [],
  controllers: [FollowsController],
  providers: [FollowsService],
})
export class FollowsModule {}
