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
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
// import { User } from './interfaces/users.interface';


@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}


    @Get()
    async findAll(): Promise<CreateUserDto[]> {
      return await this.usersService.findAll() as CreateUserDto[];
    }
    

    @Get(':id') 
    async findOneById(@Param('id') id: string): Promise<object> {
      const data =  await this.usersService.findOne(id);
        return {
          statusCode: HttpStatus.OK,
          message: `User id ${id} fetched successfully`,
          data
        };
    }


    @Get('mytweet/:userId') 
    async getUserTweet(@Param('userId') userId: string): Promise<object> {
      const data =  await this.usersService.getTweetByUserId(userId);
        return {
          statusCode: HttpStatus.OK,
          message: `User id ${userId} fetched successfully`,
          data
        };
    }


    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() userDto: CreateUserDto){
        const data =  await this.usersService.create(userDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'User created successfully',
          data
        };
    }


    @Put(':id')
    @UsePipes(ValidationPipe)
    async update(@Body() userDto: CreateUserDto, @Param('id') id: string){
        const data =  await this.usersService.update(id, userDto)
        return {
          statusCode: HttpStatus.OK,
          message: 'User Updated successfully',
          data
        };
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        const data =  await this.usersService.delete(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User deleted successfully',
          data
        };
    }
}
