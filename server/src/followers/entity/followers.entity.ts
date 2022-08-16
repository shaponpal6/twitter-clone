import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum FollowersStatusType {
    PROCEDE = "procede",
    RECEDE = "recede"
}

@Entity()
export class Followers{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    userId: string

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    followBy: string
    
    @Column({
        type: "enum",
        enum: FollowersStatusType,
        default: FollowersStatusType.PROCEDE,
    })
    status: FollowersStatusType;
    
    @CreateDateColumn()
    created: string;
    
    @UpdateDateColumn()
    updated: string;
}