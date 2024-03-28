import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: '63'})
    name: string;

    @Column({unique: true, length: '127'})
    email: string;
    
    @Column()
    password: string;

    @Column({unique: true})
    cpf: string;

    @Column()
    phone: string;

    @Column()
    dateofbirth: Date;

    @Column()
    sex: string;

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
}