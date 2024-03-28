import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './dto/createUser.dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    async createUser(@Body() data: createUserDTO){
        return this.userService.create(data)
    }

    @Post('login')
    async login(@Body() credentials: { email: string; password: string }): Promise<any> {
      const { email, password } = credentials;
      const user = await this.userService.findUserByEmail(email);
  
      if (!user || user.password !== password) {
        throw new Error('Usuário ou senha inválidos');
      }
  
      // Aqui você pode gerar um token JWT para autenticação
      // Exemplo simples sem JWT:
      return { message: 'Login bem-sucedido' };
    }

    @Get()
    async findUsers(){
        return this.userService.findAllUsers()
    }

    @Get(':id')
    async findUserById(@Param('id', ParseIntPipe) id: number){
        return this.userService.findUserById(id)
    }
}
 