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
import { CreateFollowersDto } from './dto/create-followers.dto';
import { FollowersService } from './followers.service';

@Controller('api/followers')
export class FollowersController {
    constructor(private readonly followersService: FollowersService){}


    @Get()
    async findAll(): Promise<CreateFollowersDto[]> {
      return await this.followersService.findAll() as CreateFollowersDto[];
    }


    @Get('count/:userId') 
    async getUserTweet(@Param('userId') userId: string): Promise<object> {
      const data =  await this.followersService.getFollowersByUserId(userId);
        return {
          statusCode: HttpStatus.OK,
          message: `Follower id ${userId} fetched successfully`,
          data
        };
    }


    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() tweetDto: CreateFollowersDto){
        const data =  await this.followersService.create(tweetDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'Follower added successfully',
          data
        };
    }


    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() tweetDto: CreateFollowersDto, @Param('id') id: string){
        const data =  await this.followersService.update(id, tweetDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'Follower Updated successfully',
          data
        };
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        const data =  await this.followersService.delete(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Follower deleted successfully',
          data
        };
    }
}
