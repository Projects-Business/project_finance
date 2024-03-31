import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MetaFinanceiraEntity } from './entities/metaFinanceiraEntities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMetaFinanceiraDTO } from './dto/metaFinanceira.dto';

@Injectable()
export class MetasFinanceirasService {
    constructor(
        @InjectRepository(MetaFinanceiraEntity)
        private readonly metasFinanceirasRepository: Repository<MetaFinanceiraEntity>
    ){}

    async createMetas(data: CreateMetaFinanceiraDTO){
        return this.metasFinanceirasRepository.save(data)
    }

    async findAllMetas(){
        return this.metasFinanceirasRepository.find()
    }
}
