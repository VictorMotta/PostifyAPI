import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthSignInDTO } from './dto/auth-signin.dto';
import { UsersService } from '../users/users.service';
import { AuthSignUpDTO } from './dto/auth-signup.dto';
import * as bcrypt from 'bcrypt';
import {
  ReturnCreateUser,
  UsersRepository,
} from '../users/repository/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private AUDIENCE = 'users';
  private ISSUER = 'social-postify';

  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(body: AuthSignUpDTO) {
    const user = await this.usersService.createUser(body);
    return this.createToken(user);
  }

  async signIn({ email, password }: AuthSignInDTO) {
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user)
      throw new UnauthorizedException('Email or password are incorrect');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      throw new UnauthorizedException('Email or password are incorrect');

    return this.createToken(user);
  }

  createToken(user: ReturnCreateUser) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      {
        expiresIn: '7 days',
        subject: String(user.id),
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      },
    );

    return { token };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: this.AUDIENCE,
        issuer: this.ISSUER,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new BadGatewayException(error);
    }
  }
}
