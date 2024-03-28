import { Test, TestingModule } from '@nestjs/testing';
import { ControleDespesasService } from './controle-despesas.service';

describe('ControleDespesasService', () => {
  let service: ControleDespesasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControleDespesasService],
    }).compile();

    service = module.get<ControleDespesasService>(ControleDespesasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
