import { Module } from '@nestjs/common';
import { MurmursController } from './murmurs.controller';
import { MurmursService } from './murmurs.service';

@Module({
  imports: [],
  controllers: [MurmursController],
  providers: [MurmursService],
})
export class MurmursModule {}
