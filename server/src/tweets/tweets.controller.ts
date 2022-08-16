import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param, 
    UsePipes,
    ValidationPipe,
    HttpStatus
} from '@nestjs/common';
import { CreateTweetsDto } from './dto/create-tweets.dto';
import { TweetsService } from './tweets.service';

@Controller('api/tweets')
export class TweetsController {
    
    constructor(private readonly tweetsService: TweetsService){}


    @Get()
    async findAll(): Promise<CreateTweetsDto[]> {
      return await this.tweetsService.findAll() as CreateTweetsDto[];
    }
    

    @Get(':id') 
    async findOneById(@Param('id') id: string): Promise<object> {
      const data =  await this.tweetsService.findOne(id);
        return {
          statusCode: HttpStatus.OK,
          message: `Tweet id ${id} fetched successfully`,
          data
        };
    }


    @Get('mytweet/:userId') 
    async getUserTweet(@Param('userId') userId: string): Promise<object> {
      const data =  await this.tweetsService.getTweetByUserId(userId);
        return {
          statusCode: HttpStatus.OK,
          message: `Tweet id ${userId} fetched successfully`,
          data
        };
    }


    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() tweetDto: CreateTweetsDto){
        const data =  await this.tweetsService.create(tweetDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'Tweet created successfully',
          data
        };
    }


    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() tweetDto: CreateTweetsDto, @Param('id') id: string){
        const data =  await this.tweetsService.update(id, tweetDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'Tweet Updated successfully',
          data
        };
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        const data =  await this.tweetsService.delete(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Tweet deleted successfully',
          data
        };
    }
}
