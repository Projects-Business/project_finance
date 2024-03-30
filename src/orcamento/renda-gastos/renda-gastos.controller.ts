import { Body, Controller, Get, Post } from '@nestjs/common';
import { RendaGastosService } from './renda-gastos.service';
import { CreateRendaGastosDTO } from './dto/createRendaGastos.dto';

@Controller('rendaEgastos')
export class RendaGastosController {
  constructor(
    private readonly rendaGastosService: RendaGastosService) {}

    @Post()
    async createRendaGastos(@Body() data: CreateRendaGastosDTO){
      return this.rendaGastosService.create(data)
    }

    @Get()
    async findAllRendaGastos(){
      return this.rendaGastosService.findAll()
    }
}
