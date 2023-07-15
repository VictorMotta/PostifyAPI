import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { AuthGuard } from '../auth/authGuard/auth.guard';
import { UserRequest } from '../auth/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post()
  createPublication(
    @Body() body: CreatePublicationDTO,
    @UserRequest() user: User,
  ) {
    return this.publicationService.createPublication(body, user.id);
  }
}
