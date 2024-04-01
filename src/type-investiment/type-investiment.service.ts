import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeInvestimentEntity } from './entities/typeEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTypeInvestimentDTO } from './dto/createType.dto';

@Injectable()
export class TypeInvestimentService {
    constructor(
        @InjectRepository(TypeInvestimentEntity)
        private readonly typeRepository: Repository<TypeInvestimentEntity>
    ){}

async create(data: CreateTypeInvestimentDTO){
        return this.typeRepository.save(data)
    }
}
