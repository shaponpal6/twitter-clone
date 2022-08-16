import {
    IsNotEmpty,
  } from 'class-validator';

export class CreateFollowersDto{
    readonly id: string;

    @IsNotEmpty()
    readonly userId: string;

    @IsNotEmpty()
    readonly followBy: string;

    readonly status: string;
    readonly created: string;
    readonly updated: string;
}