import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum MurmursType {
    HEART = "heart",
    Like = "like",
    HAHA = "haha",
    DISLIKE = "dislike",
    CARE = "care",
    ANGRY = "angry",
}

export enum MurmursStatusType {
    PROCEDE = "procede",
    RECEDE = "recede"
}

@Entity()
export class Murmurs{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    tweetId: string

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    userId: string;
    
    @Column({
        type: "enum",
        enum: MurmursStatusType,
        default: MurmursStatusType.PROCEDE,
    })
    status: MurmursStatusType;

    @Column({
        type: "enum",
        enum: MurmursType,
        default: MurmursType.HEART,
    })
    murmursType: MurmursType
    
    @CreateDateColumn()
    created: string;
    
    @UpdateDateColumn()
    updated: string;
}