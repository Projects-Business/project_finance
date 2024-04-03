import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RendaGastosService } from './renda-gastos.service';
import { CreateRendaGastosDTO } from './dto/createRendaGastos.dto';
import { UpdateRendaGastosDTO } from './dto/updateRendaGasto.dto';

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

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateRendaGastosDTO){
      return this.rendaGastosService.updateRendaGasto(id, data)
    }
  
    @Delete(':id')
    async deletedDivida(@Param('id', ParseIntPipe) id: number){
      return this.rendaGastosService.delete(id)
    }
}
