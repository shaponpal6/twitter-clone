import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param } from '@nestjs/common';
import { CreateTweetsDto } from './dto/create-tweets.dto';
import { TweetsService } from './tweets.service';
import { Tweets } from './interfaces/tweets.interface';


@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetsService: TweetsService){}

    @Get()
    findAll(): Tweets[]{
        return this.tweetsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Tweets{
        return this.tweetsService.findOne(id);
    }

    @Post()
    create(@Body() CreateTweetsDto: CreateTweetsDto): CreateTweetsDto{
        return CreateTweetsDto
    }

    @Put(':id')
    update(@Body() UpdateTweetsDto: CreateTweetsDto, @Param('id') id): CreateTweetsDto{
        return UpdateTweetsDto
    }

    @Delete(':id')
    delete(@Param('id') id): string{
        return id
    }

   
}
