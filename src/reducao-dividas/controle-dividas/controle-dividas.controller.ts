import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ControleDividasService } from './controle-dividas.service';
import { CreateControleDeDividasDTO } from './dto/controleDivida.dto';
import { UpdatedDividaDTO } from './dto/updateDivida.dto';

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

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatedDividaDTO){
    return this.controleDividasService.updateDivida(id, data)
  }

  @Delete(':id')
  async deletedDivida(@Param('id', ParseIntPipe) id: number){
    return this.controleDividasService.deleteDivida(id)
  }
}