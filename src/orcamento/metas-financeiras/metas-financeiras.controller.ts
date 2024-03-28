import { Controller } from '@nestjs/common';
import { MetasFinanceirasService } from './metas-financeiras.service';

@Controller('metas-financeiras')
export class MetasFinanceirasController {
  constructor(private readonly metasFinanceirasService: MetasFinanceirasService) {}
}
