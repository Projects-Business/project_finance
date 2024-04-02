import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InvestimentoEntity } from './entities/investimentoEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvestimentoDTO } from './dto/investimento.dto';
import { UpdateInvestimentDTO } from './dto/updateInvestiment.dto';

@Injectable()
export class InvestimentosService {
    constructor(
        @InjectRepository(InvestimentoEntity)
        private readonly investimentoRepository: Repository<InvestimentoEntity>
    ){}

    async create(data: CreateInvestimentoDTO){
        return this.investimentoRepository.save(data)
    }

    async findInvestiments(){
        return this.investimentoRepository.find()
    }

    async updateInvestiment(id: number, data: UpdateInvestimentDTO){
        const existId = this.investimentoRepository.findOne({where:{id}})

        if(existId){
             return this.investimentoRepository.update(id, data)
        }else{
            throw new BadRequestException("Não foi possivel atualizar esse registro")
        }
       
    }

    async delete(id: number){
        const deletedId = this.investimentoRepository.delete(id)

        if((await deletedId).affected === 1){
            return { message: `O registro ${id} foi deletado com sucesso`}
        }else{
            throw new BadRequestException("Não foi encontrado esse registro em nosso banco de dados")
        }
         
    }
}
