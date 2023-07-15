import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { PublicationsRepository } from './repository/publication.repository';
import { Publication, User } from '@prisma/client';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationsRepository) {}

  async createPublication(
    data: CreatePublicationDTO,
    userId: number,
  ): Promise<Publication> {
    const publicationExist =
      await this.publicationRepository.findPublicationByName(
        data.title.toLocaleUpperCase(),
      );
    if (publicationExist)
      throw new ConflictException('This publication title already exists');

    return await this.publicationRepository.createPublication(data, userId);
  }

  async getAllPublications(user: User) {
    return await this.publicationRepository.findAllPublicationByUserId(user.id);
  }
}
