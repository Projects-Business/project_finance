import { Module } from '@nestjs/common';
import { ControleDividasService } from './controle-dividas.service';
import { ControleDividasController } from './controle-dividas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControleDeDividasEntity } from './entities/controleDividaEntity';

@Module({
  imports: [TypeOrmModule.forFeature([ControleDeDividasEntity])],
  controllers: [ControleDividasController],
  providers: [ControleDividasService],
})
export class ControleDividasModule {}
