import { Module } from '@nestjs/common';
import { EducacaoFinanceiraService } from './educacao-financeira.service';
import { EducacaoFinanceiraController } from './educacao-financeira.controller';

@Module({
  controllers: [EducacaoFinanceiraController],
  providers: [EducacaoFinanceiraService],
})
export class EducacaoFinanceiraModule {}
