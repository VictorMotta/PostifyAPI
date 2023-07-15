import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthSignInDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
