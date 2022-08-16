import {
    MinLength,
    IsNotEmpty,
    IsEmail,
  } from 'class-validator';
export class CreateUserDto{
    readonly id: string;

    @IsNotEmpty()
    @MinLength(3)
    readonly firstName: string;

    @IsNotEmpty()
    @MinLength(3)
    readonly lastName: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly userName: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    readonly status: string;
    readonly created: string;
    readonly updated: string;
}