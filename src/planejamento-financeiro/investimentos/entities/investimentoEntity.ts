import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('investimentos')
export class InvestimentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorInvestido: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorAtual: number;

  @Column()
  dataInicio: Date;

  @Column({ nullable: true })
  dataFim: Date;

}