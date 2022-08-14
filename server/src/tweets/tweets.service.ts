import { Injectable } from '@nestjs/common';
import { Tweets } from './interfaces/tweets.interface';

@Injectable()
export class TweetsService {
    private readonly tweets: Tweets[] = [
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

    findAll(): Tweets[]{
        return this.tweets
    }

    findOne(id: string): Tweets{
        return this.tweets.find(item => item.id === id)
    }
}
