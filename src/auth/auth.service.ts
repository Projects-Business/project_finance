import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/userEntitie';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    private issue = 'login'
    private audience = 'users'

    constructor(
        private jwtService: JwtService,
        private readonly userService: UserService
    ){}

    createToken(user: UserEntity): {accessToken: string}{
        return {
            accessToken: this.jwtService.sign({
                id: user.id,
                email: user.email,
                name: user.name,
            }, {
                expiresIn: '7 days',
                subject: String(user.id),
                audience: this.audience,
                issuer: this.issue
            })
        }
    }

    checkToken(token: string) {
        try {
            const data = this.jwtService.verify(token, {
            audience: 'users', 
            issuer: 'login',
        })
        return data
        }catch (e){
            throw new BadRequestException(e)
        }
       
        
    }

    async login(email: string, password: string){
        const user = await this.userService.findUserByEmail(email)

        if(!user){
            throw new UnauthorizedException('Email ou senha incorretos.')
        }

        if(!await bcrypt.compare(password, user.password)){
            throw new UnauthorizedException("Email ou senha incorretos.")
        }
        return this.createToken(user)
    }
}
