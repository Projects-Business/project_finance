import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ControleDespesasService } from './controle-despesas.service';
import { CreateControleDespesaDTO } from './dto/controleDespesas.dto';
import { UpdateDespesaDTO } from './dto/UpdateDespesa.dto';

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

  @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateDespesaDTO){
      return this.controleDespesasService.updateDespesa(id, data)
    }
  
    @Delete(':id')
    async deletedDivida(@Param('id', ParseIntPipe) id: number){
      return this.controleDespesasService.delete(id)
    }
}
