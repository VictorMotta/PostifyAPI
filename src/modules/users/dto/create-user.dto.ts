import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 2,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 2,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}
