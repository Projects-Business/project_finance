import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/userEntitie';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDTO } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt'
import { UpdatePutDTO } from './dto/updatePutUser.dto';
import { UpdatePatchDTO } from './dto/updatePatch.dto';

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

    async findUserById(id: number){
        return this.userRepository.findOne({where: {
            id
        }})
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

    async updatePut(id: number, data: UpdatePutDTO): Promise<UserEntity>{
        const user = await this.findUserById(id);

       
        if (!user) {
            throw new BadRequestException('User not found.');
        }  
        await this.userRepository.update(id, data);
        return user;
    }

    async deleteUser(id: number){
        const user = await this.findUserById(id)

        if(!user){
            throw new BadRequestException("O usuário não foi encontrado.")
        }

        await this.userRepository.delete(id)
    }
}
