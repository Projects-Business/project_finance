import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeInvestimentEntity } from './entities/typeEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTypeInvestimentDTO } from './dto/createType.dto';
import { UpdateTypePatchDTO } from './dto/updateType.dto';

@Injectable()
export class TypeInvestimentService {
    constructor(
        @InjectRepository(TypeInvestimentEntity)
        private readonly typeRepository: Repository<TypeInvestimentEntity>
    ) { }

    async create(data: CreateTypeInvestimentDTO) {
        return this.typeRepository.save(data)
    }

    async findAll() {
        return this.typeRepository.find()
    }

    async updateType(id: number, data: UpdateTypePatchDTO){
        return this.typeRepository.update(id, data)
    }

    async deleteType(id: number){
        const deletedId = this.typeRepository.delete(id)

        if((await deletedId).affected === 1){
            return { message: `O registro ${id} foi deletado com sucesso`}
        }else{
            throw new BadRequestException("Não foi encontrado esse registro em nosso banco de dados")
        }
         
    }
}
