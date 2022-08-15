import { Injectable } from '@nestjs/common';
import { Follow } from './interfaces/follows.interface';

@Injectable()
export class FollowsService {
    private readonly follows: Follow[] = [
        {
            id: "32412",
            userId: "23232",
            followBy: "2323",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        },
        {
            id: "344334",
            userId: "23232",
            followBy: "2323",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        }
    ];

    getAllFollower(id: string): Follow[]{
        return this.follows.filter(item => item.userId === id)
    }

    follower(id: string): Follow[]{
        return this.follows.filter(item => item.userId === id && item.status === "active")
    }

    followerCount(id: string): number{
        return this.follower(id).length
    }
}
