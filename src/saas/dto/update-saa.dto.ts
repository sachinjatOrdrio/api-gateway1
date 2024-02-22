import { PartialType } from '@nestjs/swagger';
import { CreateSaaDto } from './create-saa.dto';

export class UpdateSaaDto extends PartialType(CreateSaaDto) {}
