import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('metas_financeiras')
export class MetaFinanceiraEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal' }) 
  targetAmount: number;

  @Column({ type: 'decimal' })
  currentAmount: number;

  @Column({ type: 'timestamp' })
  deadline: Date;

}
