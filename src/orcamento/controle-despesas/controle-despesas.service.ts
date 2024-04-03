import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ControleDespesaEntity } from './entities/controleDespesaEntities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateControleDespesaDTO } from './dto/controleDespesas.dto';
import { UpdateDespesaDTO } from './dto/UpdateDespesa.dto';

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

    async updateDespesa(id: number, data: UpdateDespesaDTO){
        const existId = this.controleDespesasRepository.findOne({where:{id}})

        if(existId){
             return this.controleDespesasRepository.update(id, data)
        }else{
            throw new BadRequestException("Não foi possivel atualizar esse registro")
        }
       
    }

    async delete(id: number){
        const deletedId = this.controleDespesasRepository.delete(id)

        if((await deletedId).affected === 1){
            return { message: `O registro ${id} foi deletado com sucesso`}
        }else{
            throw new BadRequestException("Não foi encontrado esse registro em nosso banco de dados")
        }
         
    }
}
