import { Module } from '@nestjs/common';
import { ControleDividasService } from './controle-dividas.service';
import { ControleDividasController } from './controle-dividas.controller';

@Module({
  controllers: [ControleDividasController],
  providers: [ControleDividasService],
})
export class ControleDividasModule {}
