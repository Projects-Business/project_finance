import { Controller } from '@nestjs/common';
import { RendaGastosService } from './renda-gastos.service';

@Controller('renda-gastos')
export class RendaGastosController {
  constructor(private readonly rendaGastosService: RendaGastosService) {}
}
