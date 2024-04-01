import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipos_investimento')
export class TypeInvestimentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

}