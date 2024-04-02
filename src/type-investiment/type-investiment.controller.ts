import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TypeInvestimentService } from './type-investiment.service';
import { CreateTypeInvestimentDTO } from './dto/createType.dto';
import { UpdateTypePatchDTO } from './dto/updateType.dto';

@Controller('type-investiment')
export class TypeInvestimentController {
  constructor(private readonly typeInvestimentService: TypeInvestimentService) { }

  @Post()
  async createType(@Body() data: CreateTypeInvestimentDTO) {
    return this.typeInvestimentService.create(data)
  }

  @Get()
  async find() {
    return this.typeInvestimentService.findAll()
  }

  @Patch(':id')
  async updateType(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTypePatchDTO) {
    return this.typeInvestimentService.updateType(id, data)
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.typeInvestimentService.deleteType(id)
  }
}
