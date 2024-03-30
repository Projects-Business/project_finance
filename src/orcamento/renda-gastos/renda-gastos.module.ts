import { Module } from '@nestjs/common';
import { RendaGastosService } from './renda-gastos.service';
import { RendaGastosController } from './renda-gastos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendaGastosEntity } from './entities/RendaGastosEntities';

@Module({
  imports: [TypeOrmModule.forFeature([RendaGastosEntity])],
  controllers: [RendaGastosController],
  providers: [RendaGastosService],
})
export class RendaGastosModule {}
