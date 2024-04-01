import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ControleDeDividasEntity } from './entities/controleDividaEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateControleDeDividasDTO } from './dto/controleDivida.dto';

@Injectable()
export class ControleDividasService {
    constructor(
        @InjectRepository(ControleDeDividasEntity)
        private readonly controleDividaRepository: Repository<ControleDeDividasEntity>
    ){}

    async createDivida(data: CreateControleDeDividasDTO){
        return this.controleDividaRepository.save(data)
    }

    async findAll(){
        return this.controleDividaRepository.find()
    }
}
