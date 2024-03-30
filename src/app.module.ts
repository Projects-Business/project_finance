import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/userEntitie';
import * as dotenv from 'dotenv'
import { JwtModule } from '@nestjs/jwt';
import { RendaGastosModule } from './orcamento/renda-gastos/renda-gastos.module';
import { MetasFinanceirasModule } from './orcamento/metas-financeiras/metas-financeiras.module';
import { ControleDespesasModule } from './orcamento/controle-despesas/controle-despesas.module';
import { InvestimentosModule } from './planejamento-financeiro/investimentos/investimentos.module';
import { ControleDividasModule } from './reducao-dividas/controle-dividas/controle-dividas.module';
import { ConsolidacaoDividasModule } from './reducao-dividas/consolidacao-dividas/consolidacao-dividas.module';
import { EducacaoFinanceiraModule } from './educacao-financeira/educacao-financeira.module';
import { RendaGastosEntity } from './orcamento/renda-gastos/entities/RendaGastosEntities';

dotenv.config()
@Module({
  imports: [UserModule, AuthModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [UserEntity,RendaGastosEntity], 
    synchronize: true,
  }), RendaGastosModule, MetasFinanceirasModule, ControleDespesasModule, InvestimentosModule, ControleDividasModule, ConsolidacaoDividasModule, EducacaoFinanceiraModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
   