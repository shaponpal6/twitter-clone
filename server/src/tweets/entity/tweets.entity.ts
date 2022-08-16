import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum TweetStatusType {
    DRAFT = "draft",
    PENDING = "pending",
    PUBLISH = "publish",
    UNPUBLISH = "unpublish",
    REPORT = "report",
    BLOCK = "block",
}

@Entity()
export class Tweets{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    title: string

    @Column({
        type: "longtext",
        default: '',
    })
    description: string

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    author: string;
    
    @Column({
        type: "enum",
        enum: TweetStatusType,
        default: TweetStatusType.PUBLISH,
    })
    status: TweetStatusType;
    
    @CreateDateColumn()
    created: string;
    
    @UpdateDateColumn()
    updated: string;
}