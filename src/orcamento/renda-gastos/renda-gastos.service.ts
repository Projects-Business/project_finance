import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RendaGastosEntity } from './entities/RendaGastosEntities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRendaGastosDTO } from './dto/createRendaGastos.dto';
import { UpdateRendaGastosDTO } from './dto/updateRendaGasto.dto';

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
    
    async updateRendaGasto(id: number, data: UpdateRendaGastosDTO){
        const existId = this.rendaGastosRepository.findOne({where:{id}})

        if(existId){
             return this.rendaGastosRepository.update(id, data)
        }else{
            throw new BadRequestException("Não foi possivel atualizar esse registro")
        }
       
    }

    async delete(id: number){
        const deletedId = this.rendaGastosRepository.delete(id)

        if((await deletedId).affected === 1){
            return { message: `O registro ${id} foi deletado com sucesso`}
        }else{
            throw new BadRequestException("Não foi encontrado esse registro em nosso banco de dados")
        }
    }
}
