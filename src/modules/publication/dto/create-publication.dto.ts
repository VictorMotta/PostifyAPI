import {
  IsBoolean,
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreatePublicationDTO {
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  // @Matches(/^\d{4}-\d{2}-\d{2}$/)
  @IsDateString()
  @IsNotEmpty()
  dateToPublish: string;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}
