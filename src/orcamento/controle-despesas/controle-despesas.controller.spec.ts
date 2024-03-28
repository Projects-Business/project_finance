import { Test, TestingModule } from '@nestjs/testing';
import { ControleDespesasController } from './controle-despesas.controller';
import { ControleDespesasService } from './controle-despesas.service';

describe('ControleDespesasController', () => {
  let controller: ControleDespesasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControleDespesasController],
      providers: [ControleDespesasService],
    }).compile();

    controller = module.get<ControleDespesasController>(ControleDespesasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
