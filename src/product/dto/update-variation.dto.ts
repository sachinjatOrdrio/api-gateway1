import { PartialType } from '@nestjs/swagger';
import { CreateVariationDto } from './create-variation.dto';

export class UpdateProductDto extends PartialType(CreateVariationDto) {}
