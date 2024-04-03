import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MetasFinanceirasService } from './metas-financeiras.service';
import { CreateMetaFinanceiraDTO } from './dto/metaFinanceira.dto';
import { UpdateMetaFinanceiraDTO } from './dto/UpdateMetaFinanceira.dto';

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

  @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateMetaFinanceiraDTO){
      return this.metasFinanceirasService.updateMeta(id, data)
    }
  
    @Delete(':id')
    async deleteMeta(@Param('id', ParseIntPipe) id: number){
      return this.metasFinanceirasService.delete(id)
    }
}
