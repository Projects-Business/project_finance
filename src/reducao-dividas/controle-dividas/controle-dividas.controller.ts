import { Body, Controller, Get, Post } from '@nestjs/common';
import { ControleDividasService } from './controle-dividas.service';
import { CreateControleDeDividasDTO } from './dto/controleDivida.dto';

@Controller('controle-dividas')
export class ControleDividasController {
  constructor(private readonly controleDividasService: ControleDividasService) {}

  @Post()
  async create(@Body() data: CreateControleDeDividasDTO){
    return this.controleDividasService.createDivida(data)
  }

  @Get()
  async findAll(){
    return this.controleDividasService.findAll()
  }
}
