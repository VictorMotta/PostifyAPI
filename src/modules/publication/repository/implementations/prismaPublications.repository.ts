import { Injectable } from '@nestjs/common';
import { PublicationsRepository } from '../publication.repository';
import { CreatePublicationDTO } from '../../dto/create-publication.dto';
import { Publication } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaPublicationsRepository implements PublicationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPublication(
    data: CreatePublicationDTO,
    userId: number,
  ): Promise<Publication> {
    return await this.prisma.publication.create({
      data: {
        ...data,
        dateToPublish: new Date(data.dateToPublish),
        title: data.title.toLocaleUpperCase(),
        userId,
      },
    });
  }

  async findPublicationByName(title: string) {
    return await this.prisma.publication.findFirst({
      where: {
        title,
      },
    });
  }

  async findAllPublicationByUserId(userId: number) {
    return await this.prisma.publication.findMany({
      where: { userId },
    });
  }
}
