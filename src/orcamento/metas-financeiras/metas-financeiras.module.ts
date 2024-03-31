import { Module } from '@nestjs/common';
import { MetasFinanceirasService } from './metas-financeiras.service';
import { MetasFinanceirasController } from './metas-financeiras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaFinanceiraEntity } from './entities/metaFinanceiraEntities';

@Module({
  imports: [TypeOrmModule.forFeature([MetaFinanceiraEntity])],
  controllers: [MetasFinanceirasController],
  providers: [MetasFinanceirasService],
})
export class MetasFinanceirasModule {}
