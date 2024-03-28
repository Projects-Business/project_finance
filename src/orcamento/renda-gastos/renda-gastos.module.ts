import { Module } from '@nestjs/common';
import { RendaGastosService } from './renda-gastos.service';
import { RendaGastosController } from './renda-gastos.controller';

@Module({
  controllers: [RendaGastosController],
  providers: [RendaGastosService],
})
export class RendaGastosModule {}
