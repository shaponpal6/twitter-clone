import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: "32412",
            fastName: "Title 1",
            lastName: "desc 1",
            userName: "shapon",
            email: "shapon",
            password: "shapon",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        },
        {
            id: "344334",
            fastName: "Title 1",
            lastName: "desc 1",
            userName: "shapon",
            email: "shapon",
            password: "shapon",
            status: "active",
            created: "12 july, 2022 12:22:21",
            updated: "12 july, 2022 12:22:21",
        }
    ];

    findAll(): User[]{
        return this.users
    }

    findOne(id: string): User{
        return this.users.find(item => item.id === id)
    }
}
