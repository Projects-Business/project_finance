import { Module } from '@nestjs/common';
import { ControleDespesasService } from './controle-despesas.service';
import { ControleDespesasController } from './controle-despesas.controller';

@Module({
  controllers: [ControleDespesasController],
  providers: [ControleDespesasService],
})
export class ControleDespesasModule {}
