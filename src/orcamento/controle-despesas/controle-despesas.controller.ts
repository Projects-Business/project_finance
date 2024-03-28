import { Controller } from '@nestjs/common';
import { ControleDespesasService } from './controle-despesas.service';

@Controller('controle-despesas')
export class ControleDespesasController {
  constructor(private readonly controleDespesasService: ControleDespesasService) {}
}
