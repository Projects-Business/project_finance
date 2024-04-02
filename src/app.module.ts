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
import { RendaGastosEntity } from './orcamento/renda-gastos/entities/RendaGastosEntities';
import { MetaFinanceiraEntity } from './orcamento/metas-financeiras/entities/metaFinanceiraEntities';
import { ControleDespesaEntity } from './orcamento/controle-despesas/entities/controleDespesaEntities';
import { ControleDeDividasEntity } from './reducao-dividas/controle-dividas/entities/controleDividaEntity';
import { TypeInvestimentModule } from './type-investiment/type-investiment.module';
import { TypeInvestimentEntity } from './type-investiment/entities/typeEntity';
import { InvestimentoEntity } from './planejamento-financeiro/investimentos/entities/investimentoEntity';

dotenv.config()
@Module({
  imports: [UserModule, AuthModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [UserEntity,RendaGastosEntity, MetaFinanceiraEntity, ControleDespesaEntity, ControleDeDividasEntity, TypeInvestimentEntity, InvestimentoEntity], 
    synchronize: true,
  }), RendaGastosModule, MetasFinanceirasModule, ControleDespesasModule, InvestimentosModule, ControleDividasModule, TypeInvestimentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
   