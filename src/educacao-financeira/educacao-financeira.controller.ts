import { Controller } from '@nestjs/common';
import { EducacaoFinanceiraService } from './educacao-financeira.service';

@Controller('educacao-financeira')
export class EducacaoFinanceiraController {
  constructor(private readonly educacaoFinanceiraService: EducacaoFinanceiraService) {}
}
