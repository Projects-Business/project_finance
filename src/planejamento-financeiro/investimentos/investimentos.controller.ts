import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { InvestimentosService } from './investimentos.service';
import { CreateInvestimentoDTO } from './dto/investimento.dto';
import { UpdateInvestimentDTO } from './dto/updateInvestiment.dto';

@Controller('investimentos')
export class InvestimentosController {
  constructor(private readonly investimentosService: InvestimentosService) {}

  @Post()
  async create(@Body() data: CreateInvestimentoDTO){
    return this.investimentosService.create(data)
  }

  @Get()
  async find(){
    return this.investimentosService.findInvestiments()
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateInvestimentDTO){
    return this.investimentosService.updateInvestiment(id, data)
  }

  @Delete(':id')
  async deletedDivida(@Param('id', ParseIntPipe) id: number){
    return this.investimentosService.delete(id)
  }
}
