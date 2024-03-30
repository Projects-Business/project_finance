import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rendaegastos')
export class RendaGastosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column()
    value: string;

    @Column()
    type: string;
}