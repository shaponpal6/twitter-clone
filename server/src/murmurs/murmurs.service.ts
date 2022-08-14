import { Injectable } from '@nestjs/common';
import { Murmurs } from './interfaces/murmurs.interface';

@Injectable()
export class MurmursService {
    private readonly murmurs: Murmurs[] = [
        {
            id: "32412",
            title: "Title 1",
            description: "desc 1",
            author: "shapon",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        },
        {
            id: "344334",
            title: "Title 2",
            description: "desc 2",
            author: "shapon",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        }
    ];

    findAll(): Murmurs[]{
        return this.murmurs
    }

    findOne(id: string): Murmurs{
        return this.murmurs.find(item => item.id === id)
    }
}
