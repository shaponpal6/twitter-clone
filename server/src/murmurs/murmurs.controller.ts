import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param } from '@nestjs/common';
import { CreateMurmursDto } from './dto/create-murmurs.dto';
import { MurmursService } from './murmurs.service';
import { Murmurs } from './interfaces/murmurs.interface';


@Controller('murmurs')
export class MurmursController {
    constructor(private readonly murmursService: MurmursService){}

    @Get()
    findAll(): Murmurs[]{
        return this.murmursService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Murmurs{
        return this.murmursService.findOne(id);
    }

    @Post()
    create(@Body() CreateMurmursDto: CreateMurmursDto): CreateMurmursDto{
        return CreateMurmursDto
    }

    @Put(':id')
    update(@Body() UpdateMurmursDto: CreateMurmursDto, @Param('id') id): CreateMurmursDto{
        return UpdateMurmursDto
    }

    @Delete(':id')
    delete(@Param('id') id): string{
        return id
    }

   
}
