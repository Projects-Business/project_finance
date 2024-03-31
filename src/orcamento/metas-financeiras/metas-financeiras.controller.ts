import { Body, Controller, Get, Post } from '@nestjs/common';
import { MetasFinanceirasService } from './metas-financeiras.service';
import { CreateMetaFinanceiraDTO } from './dto/metaFinanceira.dto';

@Controller('metas-financeiras')
export class MetasFinanceirasController {
  constructor(private readonly metasFinanceirasService: MetasFinanceirasService) {}

  @Post()
  async create(@Body() data: CreateMetaFinanceiraDTO){
    return this.metasFinanceirasService.createMetas(data)
  }

  @Get()
  async find(){
    return this.metasFinanceirasService.findAllMetas()
  }
}
