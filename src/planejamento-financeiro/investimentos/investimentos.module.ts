import { Module } from '@nestjs/common';
import { InvestimentosService } from './investimentos.service';
import { InvestimentosController } from './investimentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestimentoEntity } from './entities/investimentoEntity';

@Module({
  imports: [TypeOrmModule.forFeature([InvestimentoEntity])],
  controllers: [InvestimentosController],
  providers: [InvestimentosService],
})
export class InvestimentosModule {}
