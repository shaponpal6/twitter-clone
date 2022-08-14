import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MurmursController } from './murmurs/murmurs.controller';
import { MurmursService } from './murmurs/murmurs.service';

@Module({
  imports: [],
  controllers: [AppController, MurmursController],
  providers: [AppService, MurmursService],
})
export class AppModule {}
