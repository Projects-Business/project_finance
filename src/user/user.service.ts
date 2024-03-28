import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/userEntitie';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDTO } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async findUserByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }

    async findUserByCpf(cpf: string) {
        return this.userRepository.findOne({ where: { cpf } });
    }

    async findAllUsers(){
        return this.userRepository.find()
    }

    async create(data: createUserDTO) {

        const userExistByEmail = await this.findUserByEmail(data.email);
        const userExistByCpf = await this.findUserByCpf(data.cpf)
        
        if (userExistByEmail) {
            throw new BadRequestException('User with this email already exists.');
        }
        if(userExistByCpf){
            throw new BadRequestException('User with this cpf already exists.');
        }

        const salt = await bcrypt.genSalt()
        data.password = await bcrypt.hash(data.password, salt)
    
        return this.userRepository.save(data)
    }
}
