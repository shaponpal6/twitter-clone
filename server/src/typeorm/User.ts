import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    VISITOR = "visitor",
    PLATINUM = "platinum",
    GOLD = "gold",
    DIMOND = "dimond",
}

export enum StatusType {
    ACTIVE = "active",
    DEACTIVE = "deactive",
    FREEZE = "freeze",
    BLOCK = "block",
}

@Entity()
export class Users{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "varchar",
        length: 50,
        default: 'Anonymous',
    })
    firstName: string

    @Column({
        type: "varchar",
        length: 50,
        default: '',
    })
    lastName: string

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
    })
    userName: string;
    
    @Column({
        type: "varchar",
        length: 50,
        unique: true,
    })
    email: string;
    
    @Column({
        type: "varchar",
        length: 255,
        nullable: false,
    })
    password: string;
    
    @Column({
        type: "enum",
        enum: StatusType,
        default: StatusType.ACTIVE,
    })
    status: StatusType;

    @Column({
        type: "set",
        enum: UserRole,
        default: [UserRole.VISITOR],
    })
    role: UserRole[]
    
    @CreateDateColumn()
    created: string;
    
    @UpdateDateColumn()
    updated: string;
}