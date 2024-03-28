import { Controller } from '@nestjs/common';
import { ConsolidacaoDividasService } from './consolidacao-dividas.service';

@Controller('consolidacao-dividas')
export class ConsolidacaoDividasController {
  constructor(private readonly consolidacaoDividasService: ConsolidacaoDividasService) {}
}
