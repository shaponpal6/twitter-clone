import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param } from '@nestjs/common';
import { CreateFollowsDto } from './dto/create-follows.dto';
import { FollowsService } from './follows.service';
import { Follow } from './interfaces/follows.interface';


@Controller('follows')
export class FollowsController {
    constructor(private readonly followsService: FollowsService){}

    @Get(':id')
    getAllFollower(@Param('id') id): Follow[]{
        return this.followsService.getAllFollower(id);
    }

    @Get('follower/:id')
    getFollower(@Param('id') id): Follow[]{
        return this.followsService.follower(id);
    }

    @Get('count/:id')
    getFollowerCount(@Param('id') id): number{
        return this.followsService.followerCount(id);
    }

    @Post()
    create(@Body() CreateFollowsDto: CreateFollowsDto): CreateFollowsDto{
        return CreateFollowsDto
    }

    @Put(':id')
    update(@Body() UpdateFollowsDto: CreateFollowsDto, @Param('id') id): CreateFollowsDto{
        return UpdateFollowsDto
    }

   
}
