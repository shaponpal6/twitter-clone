import { IsNotEmpty } from 'class-validator';

export class CreateMurmursDto{
    readonly id: string;

    @IsNotEmpty()
    readonly tweetId: string;

    @IsNotEmpty()
    readonly userId: string;

    readonly murmursType: string;
    readonly status: string;
    readonly created: string;
    readonly updated: string;
}