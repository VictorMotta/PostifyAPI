import { Publication } from '@prisma/client';
import { CreatePublicationDTO } from '../dto/create-publication.dto';

export abstract class PublicationsRepository {
  abstract createPublication(
    data: CreatePublicationDTO,
    userId: number,
  ): Promise<Publication>;
  abstract findPublicationByName(title: string): Promise<Publication>;
  abstract findAllPublicationByUserId(userId: number): Promise<Publication[]>;
}
