import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Get()
    async findUsers(){
        return this.userService.findAllUsers()
    }
}
 