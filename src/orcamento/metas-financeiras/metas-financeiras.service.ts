import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MetaFinanceiraEntity } from './entities/metaFinanceiraEntities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMetaFinanceiraDTO } from './dto/metaFinanceira.dto';
import { UpdateMetaFinanceiraDTO } from './dto/UpdateMetaFinanceira.dto';

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

    async updateMeta(id: number, data: UpdateMetaFinanceiraDTO){
        const existId = this.metasFinanceirasRepository.findOne({where:{id}})

        if(existId){
             return this.metasFinanceirasRepository.update(id, data)
        }else{
            throw new BadRequestException("Não foi possivel atualizar esse registro")
        }
       
    }

    async delete(id: number){
        const deletedId = this.metasFinanceirasRepository.delete(id)

        if((await deletedId).affected === 1){
            return { message: `O registro ${id} foi deletado com sucesso`}
        }else{
            throw new BadRequestException("Não foi encontrado esse registro em nosso banco de dados")
        }
         
    }
}
