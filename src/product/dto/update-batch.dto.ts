import { PartialType } from '@nestjs/swagger';
import { CreateBatchDto } from './create-batch.dto';

export class UpdateProductDto extends PartialType(CreateBatchDto) {}
