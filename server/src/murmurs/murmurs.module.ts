import { Module } from '@nestjs/common';
import { MurmursController } from './murmurs.controller';
import { MurmursService } from './murmurs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Murmurs as MurmursEntity } from './entity/murmurs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MurmursEntity])],
  controllers: [MurmursController],
  providers: [MurmursService],
})
export class MurmursModule {}
