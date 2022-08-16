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
import { CreateMurmursDto } from './dto/create-murmurs.dto';
import { MurmursService } from './murmurs.service';
// import { Murmurs } from './interfaces/murmurs.interface';


@Controller('api/murmurs')
export class MurmursController {
    constructor(private readonly murmursService: MurmursService){}

    @Get()
    async findAll(): Promise<CreateMurmursDto[]> {
      return await this.murmursService.findAll() as CreateMurmursDto[];
    }
    

    @Get(':id') 
    async findOneById(@Param('id') id: string): Promise<object> {
      const data =  await this.murmursService.findOne(id);
        return {
          statusCode: HttpStatus.OK,
          message: `Murmur id ${id} fetched successfully`,
          data
        };
    }


    @Get('count/:tweetId') 
    async getMurmursByTweetId(@Param('tweetId') tweetId: string): Promise<object> {
      const data =  await this.murmursService.getMurmurByTweetId(tweetId);
        return {
          statusCode: HttpStatus.OK,
          message: `Murmur id ${tweetId} fetched successfully`,
          data
        };
    }


    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() tweetDto: CreateMurmursDto){
        const data =  await this.murmursService.create(tweetDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'Murmur created successfully',
          data
        };
    }


    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() tweetDto: CreateMurmursDto, @Param('id') id: string){
        const data =  await this.murmursService.update(id, tweetDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'Murmur Updated successfully',
          data
        };
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        const data =  await this.murmursService.delete(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Murmur deleted successfully',
          data
        };
    }
}
