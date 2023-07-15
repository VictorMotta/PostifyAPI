import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthSignInDTO } from './dto/auth-signin.dto';
import { AuthService } from './auth.service';
import { AuthSignUpDTO } from './dto/auth-signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: AuthSignUpDTO) {
    return this.authService.signUp(body);
  }

  @HttpCode(200)
  @Post('signin')
  async signIn(@Body() body: AuthSignInDTO) {
    return this.authService.signIn(body);
  }
}
