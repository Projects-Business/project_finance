import { Body, Controller, Get, Post } from '@nestjs/common';
import { ControleDespesasService } from './controle-despesas.service';
import { CreateControleDespesaDTO } from './dto/controleDespesas.dto';

@Controller('controle-despesas')
export class ControleDespesasController {
  constructor(private readonly controleDespesasService: ControleDespesasService) {}

  @Post()
  async createControleDeDespesas(@Body() data: CreateControleDespesaDTO){
    return this.controleDespesasService.create(data)
  }

  @Get()
  async findAllDespesa(){
    return this.controleDespesasService.findAll()
  }
}
