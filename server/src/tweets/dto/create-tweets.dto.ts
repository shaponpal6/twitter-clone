import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    ValidateNested,
    IsDefined,
    IsNotEmptyObject,
    IsObject,
    IsString,
  } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTweetsDto{
    readonly id: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(250)
    readonly title: string;

    @IsNotEmpty()
    @MinLength(4)
    readonly description: string;

    readonly author: string;
    readonly status: string;
    readonly created: string;
    readonly updated: string;
}