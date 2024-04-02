import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ControleDeDividasEntity } from './entities/controleDividaEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateControleDeDividasDTO } from './dto/controleDivida.dto';
import { UpdatedDividaDTO } from './dto/updateDivida.dto';

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

    async updateDivida(id: number, data: UpdatedDividaDTO){
        const existId = this.controleDividaRepository.findOne({where:{id}})

        if(existId){
             return this.controleDividaRepository.update(id, data)
        }else{
            throw new BadRequestException("Não foi possivel atualizar esse registro")
        }
       
    }

    async deleteDivida(id: number){
        const deletedId = this.controleDividaRepository.delete(id)

        if((await deletedId).affected === 1){
            return { message: `O registro ${id} foi deletado com sucesso`}
        }else{
            throw new BadRequestException("Não foi encontrado esse registro em nosso banco de dados")
        }
         
    }
}
