import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ControleDespesaEntity } from './entities/controleDespesaEntities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateControleDespesaDTO } from './dto/controleDespesas.dto';

@Injectable()
export class ControleDespesasService {
   
    constructor( 
        @InjectRepository(ControleDespesaEntity)
        private readonly controleDespesasRepository: Repository<ControleDespesaEntity>
    ){}

    async create(data: CreateControleDespesaDTO){
        return this.controleDespesasRepository.save(data)
    }

    async findAll(){
        return this.controleDespesasRepository.find()
    }
}
