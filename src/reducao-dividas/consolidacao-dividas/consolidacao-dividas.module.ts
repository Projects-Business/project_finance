import { Module } from '@nestjs/common';
import { ConsolidacaoDividasService } from './consolidacao-dividas.service';
import { ConsolidacaoDividasController } from './consolidacao-dividas.controller';

@Module({
  controllers: [ConsolidacaoDividasController],
  providers: [ConsolidacaoDividasService],
})
export class ConsolidacaoDividasModule {}
