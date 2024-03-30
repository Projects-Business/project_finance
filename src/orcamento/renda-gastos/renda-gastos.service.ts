import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RendaGastosEntity } from './entities/RendaGastosEntities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRendaGastosDTO } from './dto/createRendaGastos.dto';

@Injectable()
export class RendaGastosService {
    constructor(
        @InjectRepository(RendaGastosEntity)
        private readonly rendaGastosRepository: Repository<RendaGastosEntity>
    ){}

    async findAll(){
        return this.rendaGastosRepository.find()
    }

    async create(data: CreateRendaGastosDTO){
        return this.rendaGastosRepository.save(data)
    }
}
