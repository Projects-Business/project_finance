import { Body, Controller, Post } from '@nestjs/common';
import { TypeInvestimentService } from './type-investiment.service';
import { CreateTypeInvestimentDTO } from './dto/createType.dto';

@Controller('type-investiment')
export class TypeInvestimentController {
  constructor(private readonly typeInvestimentService: TypeInvestimentService) {}

  @Post()
  async createType(@Body() data: CreateTypeInvestimentDTO){
    return this.typeInvestimentService.create(data)
  }
}
