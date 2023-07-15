import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PublicationModule } from './modules/publication/publication.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, PublicationModule],
})
export class AppModule {}
