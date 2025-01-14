import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

  @Entity('controle_despesa')
export class ControleDespesaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({type: 'decimal'})
    amount: number;

    @Column({type: 'date'})
    date: Date
} 