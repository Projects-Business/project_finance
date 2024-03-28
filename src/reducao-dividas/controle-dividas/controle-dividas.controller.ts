import { Controller } from '@nestjs/common';
import { ControleDividasService } from './controle-dividas.service';

@Controller('controle-dividas')
export class ControleDividasController {
  constructor(private readonly controleDividasService: ControleDividasService) {}
}
