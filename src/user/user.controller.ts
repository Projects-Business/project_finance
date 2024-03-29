import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from './dto/createUser.dto';
import { UpdatePutDTO } from './dto/updatePutUser.dto';
import { UpdatePatchDTO } from './dto/updatePatch.dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    async createUser(@Body() data: createUserDTO) {
        return this.userService.create(data)
    }

    @Post('login')
    async login(@Body() credentials: { email: string; password: string }): Promise<any> {
        const { email, password } = credentials;
        const user = await this.userService.findUserByEmail(email);

        if (!user || user.password !== password) {
            throw new Error('Usuário ou senha inválidos');
        }

        return { message: 'Login bem-sucedido' };
    }

    @Get()
    async findUsers() {
        return this.userService.findAllUsers()
    }

    @Get(':id')
    async findUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUserById(id)
    }

    @Put(':id')
    async updatePutUser(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePutDTO) {
        return this.userService.updatePut(id, data)
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe)id: number){
        return this.userService.deleteUser(id)
    }
}
