import { User } from '@prisma/client';
import { CreateUserDTO } from '../dto/create-user.dto';

export type ReturnCreateUser = Pick<User, 'id' | 'name' | 'email' | 'avatar'>;

export abstract class UsersRepository {
  abstract createUser(data: CreateUserDTO): Promise<ReturnCreateUser>;
  abstract findUserByEmail(email: string): Promise<User>;
}
