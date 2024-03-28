import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { AuthLoginDTO } from './dto/AuthLoginDTO';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body: AuthLoginDTO){
      return this.authService.login(body.email, body.password)
    }



}

