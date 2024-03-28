import { Test, TestingModule } from '@nestjs/testing';
import { EducacaoFinanceiraController } from './educacao-financeira.controller';
import { EducacaoFinanceiraService } from './educacao-financeira.service';

describe('EducacaoFinanceiraController', () => {
  let controller: EducacaoFinanceiraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducacaoFinanceiraController],
      providers: [EducacaoFinanceiraService],
    }).compile();

    controller = module.get<EducacaoFinanceiraController>(EducacaoFinanceiraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
