import { Test, TestingModule } from '@nestjs/testing';
import { EducacaoFinanceiraService } from './educacao-financeira.service';

describe('EducacaoFinanceiraService', () => {
  let service: EducacaoFinanceiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducacaoFinanceiraService],
    }).compile();

    service = module.get<EducacaoFinanceiraService>(EducacaoFinanceiraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
