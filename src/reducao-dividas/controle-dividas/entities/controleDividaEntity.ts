import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('controle_dividas')
export class ControleDeDividasEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column({type: 'decimal'})
    amount: number;
    
    @Column({type: 'date'})
    dueDate: Date;
    
    @Column({default: 'Pendente'})
    status: string;
}