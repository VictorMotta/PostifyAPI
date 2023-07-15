import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PublicationsRepository } from './repository/publication.repository';
import { PrismaPublicationsRepository } from './repository/implementations/prismaPublications.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    { provide: PublicationsRepository, useClass: PrismaPublicationsRepository },
  ],
})
export class PublicationModule {}
