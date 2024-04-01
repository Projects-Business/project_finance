import { Module } from '@nestjs/common';
import { ControleDespesasService } from './controle-despesas.service';
import { ControleDespesasController } from './controle-despesas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControleDespesaEntity } from './entities/controleDespesaEntities';

@Module({
  imports: [TypeOrmModule.forFeature([ControleDespesaEntity])],
  controllers: [ControleDespesasController],
  providers: [ControleDespesasService],
})
export class ControleDespesasModule {}
