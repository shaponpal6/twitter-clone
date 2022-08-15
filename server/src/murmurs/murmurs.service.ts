import { Injectable } from '@nestjs/common';
import { Murmurs } from './interfaces/murmurs.interface';

@Injectable()
export class MurmursService {
    private readonly murmurs: Murmurs[] = [
        {
            id: "32412",
            tweetId: "21211",
            userId: "243214",
            murmursType: "murmurs",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        },
        {
            id: "344334",
            tweetId: "212211",
            userId: "243214",
            murmursType: "murmurs",
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
